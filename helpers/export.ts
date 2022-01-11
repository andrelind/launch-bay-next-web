import ffgXws from 'lbn-core/dist/assets/ffg-xws';
import { slotKeys } from 'lbn-core/dist/helpers/enums';
import { SlotKey, Translation } from 'lbn-core/dist/types';
import { v4 as uuid } from 'uuid';
import { factionFromKey, keyFromFaction } from './convert';
import { loadShip2 } from './loading';
import { PilotXWS, XWS } from './types';

const rep = (c: string, t: string, d: string) => {
  while (d.indexOf(c) >= 0) {
    d = d.replace(c, t);
  }
  return d;
};

const getKeyByValue = (object: { [s: string]: string }, value: string) => {
  const o = Object.keys(object).find((key) => object[key] === value);
  return parseInt(o || '0', 10) || value;
};

export const serialize = (o?: XWS) => {
  if (!o) {
    return;
  }

  const lbx = [
    rep("'", '', encodeURIComponent(o.name)),
    o.points,
    getKeyByValue(ffgXws.factions, factionFromKey(o.faction)),
    o.format === 'Extended' ? 0 : 1,
    ...o.pilots.map((p) => {
      const upgrades: (string | number)[][] = [];
      slotKeys.forEach((key) => {
        const up = p.upgrades && p.upgrades[key as SlotKey];
        if (up && up.length > 0) {
          upgrades.push([
            getKeyByValue(ffgXws.slots, key),
            ...((p.upgrades && p.upgrades[key as SlotKey]) || []).map((u) =>
              getKeyByValue(ffgXws.upgrades, u)
            ),
          ]);
        }
      });

      const data = [
        getKeyByValue(ffgXws.ships, p.ship),
        getKeyByValue(ffgXws.pilots, p.id),
      ];

      if (upgrades.length > 0) {
        return [...data, ...upgrades];
      }
      return data;
    }),
  ];

  let d = JSON.stringify(lbx);
  d = rep(',', '.', d);
  d = rep('[', 'l', d);
  d = rep(']', 'r', d);
  d = rep('"', "'", d);
  d = d.substring(1, d.length - 1);

  return d;
};

export const deserialize = (o: string, uid?: string): XWS => {
  // New format, replace "l with (" and "r with )"
  o = o
    .split('.')
    .map((s, i) => {
      if (i > 2) {
        return rep('l', '(', rep('r', ')', s));
      }
      return s;
    })
    .join('.');
  o = rep('.', ',', o);

  o = rep('(', '[', o);
  o = rep(')', ']', o);
  o = rep("'", '"', o);
  o = rep('""', '"', o);

  if (o[0] !== '[') {
    o = `[${o}]`;
  }

  const d = JSON.parse(o);
  const [squadName, cost, faction, format, ...pilots] = d;

  const xws: XWS = {
    name: decodeURIComponent(squadName),
    description: '',
    points: parseInt(cost, 10),
    faction: keyFromFaction(ffgXws.factions[faction]),
    format: parseInt(format, 10) === 1 ? 'Hyperspace' : 'Extended',
    pilots: pilots.map((p: any): PilotXWS => {
      const [ship, id, ...upgrades] = p;
      const parsedUpgrades: { [key in SlotKey]?: string[] } = {};
      (upgrades || []).forEach((u: any) => {
        const [key, ...list] = u;
        parsedUpgrades[ffgXws.slots[key]] = list.map(
          (l: string) => ffgXws.upgrades[l] || l
        );
      });

      return {
        id: ffgXws.pilots[`${id}`] || id,
        ship: ffgXws.ships[`${ship}`] || ship,
        points: 0,
        upgrades: parsedUpgrades,
      };
    }),
    version: '2.0.0',
    vendor: {
      lbn: {
        uid: uid || uuid(),
        wins: 0,
        losses: 0,
        tags: [],
        created: new Date(),
      },
    },
  };

  // console.log({ xws: JSON.stringify(xws) });

  return xws;
};

export const exportAsXws = (xws: XWS) => {
  const link = serialize(xws);

  const e = {
    name: xws.name,
    description: xws.description || '',
    faction: xws.faction,
    points: xws.points,
    version: xws.version || '2.0.0',
    pilots: xws.pilots.map((p) => {
      const upgrades: { [s: string]: string[] } = {};
      Object.keys(p.upgrades || {}).map((key) => {
        const real = key === 'forcepower' ? 'force-power' : key;
        if (p.upgrades) {
          // @ts-ignore
          upgrades[real] = p.upgrades[key as SlotKey];
        }
      });

      return {
        id: p.id,
        ship: p.ship,
        points: p.points || 0,
        upgrades,
      };
    }),
    vendor: {
      lbn: {
        builder: 'Launch Bay Next',
        builder_url: 'https://launchbaynext.app',
        link: `https://launchbaynext.app/print?lbx=${link}`,
        ...xws.vendor.lbn,
      },
    },
  };

  return JSON.stringify(e);
};

const cleanText = (text?: string) => {
  return text?.replace(/ *\([^)]*\) */g, '');
};

export const exportAsText = (
  xws: XWS,
  t: (translation?: Translation) => string
) => {
  let text = `${xws.name}\n`;

  xws.pilots.map((p) => {
    const ship = loadShip2(p, xws.faction, xws.format);
    text += `\n(${ship?.pilot?.cost}) ${t(ship?.pilot?.name)} [${t(
      ship?.name
    )}]`;

    slotKeys.forEach((key) => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach((u) => {
          text += `\n(${u.finalCost}) ${cleanText(t(u.sides[0].title))}`;
        });
      }
    });
    text += `\nPoints: ${ship.pointsWithUpgrades}\n`;
  });

  text += `\nTotal points: ${xws.points}`;
  return text;
};

export const exportAsTTS = (
  xws: XWS,
  t: (translation?: Translation) => string
) => {
  let text = '';
  xws.pilots.map((p) => {
    // Get ship
    const ship = loadShip2(p, xws.faction, xws.format);
    text += t(ship.pilot?.name);

    slotKeys.forEach((key) => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach((u) => {
          text += ` + ${cleanText(t(u.sides[0].title))}`;
        });
      }
    });

    text += ' / ';
  });
  return text;
};
