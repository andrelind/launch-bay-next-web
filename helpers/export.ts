import ffgXws from 'lbn-core/dist/assets/ffg-xws';
import { slotKeys } from 'lbn-core/dist/helpers/enums';
import { SlotKey } from 'lbn-core/dist/types';
import { v4 as uuid } from 'uuid';
import {
  factionFromKey,
  keyFromFaction,
  keyFromObstacle,
  obstacleFromKey,
} from './convert';
import { loadShip2 } from './loading';
import { PilotXWS, XWS } from './types';

const rep = (c: string, t: string, d: string | number) => {
  if (typeof d === 'number') {
    return `${d}`;
  }

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
    o.pilots.map((p) => {
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
    o.obstacles?.map((p) => keyFromObstacle(p)) || [],
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
  o = rep('%27%27', '%27%20%27', o);
  o = rep("''", "' '", o);
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

  try {
    const d = JSON.parse(o);
    const [squadName, cost, faction, format, pilots, obstacles, ...rest] = d;

    const fa = keyFromFaction(ffgXws.factions[faction]);
    const fo = parseInt(format, 10) === 1 ? 'Standard' : 'Extended';

    const getPilots = () => {
      if (Array.isArray(pilots[0]) || pilots.length === 0) {
        return pilots;
      } else {
        return [pilots, obstacles, ...rest];
      }
    };

    const xws: XWS = {
      name: decodeURIComponent(squadName),
      description: '',
      points: parseInt(cost, 10),
      faction: fa,
      format: fo,
      obstacles: Array.isArray(pilots[0])
        ? obstacles?.map((p: any) => obstacleFromKey(p))
        : undefined,
      pilots: getPilots().map((p: any): PilotXWS => {
        const [dShip, dId, ...upgrades] = p;
        const ship = rep(']', 'r', rep('[', 'l', dShip));
        const id = rep(']', 'r', rep('[', 'l', dId));

        const parsedUpgrades: { [key in SlotKey]?: string[] } = {};
        (upgrades || []).forEach((u: any) => {
          const [key, ...list] = u;
          parsedUpgrades[ffgXws.slots[key]] = list.map((l: string) => {
            const xws = rep(']', 'r', rep('[', 'l', l));
            return ffgXws.upgrades[xws] || xws;
          });
        });

        const pp = {
          id: ffgXws.pilots[`${id}`] || id,
          ship: ffgXws.ships[`${ship}`] || ship,
          points: 0,
          upgrades: parsedUpgrades,
        };

        const s = loadShip2(pp, fa, fo);
        return {
          ...pp,
          points: s.pilot?.cost || 0,
        };
      }),
      version: '2.5.0',
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
  } catch (error) {
    console.log(o);
    throw error;
  }
};

export const exportAsXws = (xws: XWS) => {
  const link = serialize(xws);

  const e = {
    name: xws.name,
    description: xws.description || '',
    faction: xws.faction,
    points: xws.points,
    version: xws.version || '2.0.0',
    obstacles: xws.obstacles,
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

export const exportAsText = (xws: XWS) => {
  let text = `${xws.name}\n`;

  xws.pilots.map((p) => {
    const ship = loadShip2(p, xws.faction, xws.format);
    text += `\n(${ship?.pilot?.cost}) ${ship?.pilot?.name} [${ship?.name}]`;

    slotKeys.forEach((key) => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach((u) => {
          text += `\n(${u.finalCost}) ${cleanText(u.sides[0].title)}`;
        });
      }
    });
    text += `\nPoints: ${ship?.pilot?.cost}\n`;
  });

  text += `\nTotal points: ${xws.points}`;
  return text;
};

export const exportAsTTS = (xws: XWS) => {
  let text = '';
  xws.pilots.map((p, i) => {
    // Get ship
    const ship = loadShip2(p, xws.faction, xws.format);
    text += ship.pilot?.name;

    slotKeys.forEach((key) => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach((u) => {
          text += ` + ${cleanText(u.sides[0].title)}`;
        });
      }
    });

    if (i < xws.pilots.length - 1) {
      text += ' / ';
    }
  });

  if (xws.obstacles && xws.obstacles?.length > 0) {
    xws.obstacles?.map((o, i) => {
      i === 0
        ? (text += ` | ${o.replace('obstacle-', '')}`)
        : (text += ` / ${o.replace('obstacle-', '')}`);
    });
  }

  return text;
};
