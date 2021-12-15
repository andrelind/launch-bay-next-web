import upgradeData from 'lbn-core/dist/assets/upgrades';
import { slotKeys } from 'lbn-core/dist/helpers/enums';
import { SlotKey } from 'lbn-core/dist/types';
import { v4 as uuid } from 'uuid';
import { deserialize } from './export';
import { PilotXWS, XWS } from './types';

// const cleanText = (text?: string) => {
//   return text?.replace(/ *\([^)]*\) */g, '');
// };

const validatePilot = (pilot: any): PilotXWS | void => {
  const p: PilotXWS = {
    id: pilot.id || pilot.name,
    ship: pilot.ship,
    points: pilot.points,
    upgrades: {},
  };

  const { id, ship } = p;
  if (!id || !ship) {
    console.log('No XWS');
    return undefined;
  }

  Object.keys(pilot.upgrades || {}).forEach((key) => {
    const getSlotKey = (s: string): SlotKey | undefined => {
      switch (s) {
        case 'amd':
          return 'astromech';
        case 'ept':
          return 'talent';
        case 'mod':
          return 'modification';
        case 'hardpoint':
          return undefined;
        case 'force-power':
          return 'forcepower';
        default: {
          if (!slotKeys.includes(s as SlotKey) || !upgradeData[s as SlotKey]) {
            return undefined;
          }
          return s as SlotKey;
        }
      }
    };
    // const slotKey = key as SlotKey;
    const slotKey = getSlotKey(key);
    if (!slotKey || !Array.isArray(pilot.upgrades[key])) {
      return;
    }
    try {
      for (const xws of pilot.upgrades[key]) {
        if (upgradeData[slotKey]?.find((u) => u.xws === xws)) {
          if (!p.upgrades?.[slotKey]) {
            p.upgrades[slotKey] = [];
          }
          p.upgrades[slotKey]?.push(xws);
        }
      }
    } catch (error) {
      console.error({ error });
    }
  });

  // console.log({ p });

  return p;
};

const validatePilots = (list: Array<any>) => {
  // console.log(list);
  if (!Array.isArray(list)) {
    // console.log(`Not an array - ${typeof list}`);
    console.log('validatePilots', 'Not a list');
    return undefined;
  }

  const pilots: PilotXWS[] = [];

  for (const pilot of list) {
    if (typeof pilot !== 'object') {
      continue;
    }
    const p = validatePilot(pilot);
    if (p) {
      pilots.push(p);
    }
  }

  return pilots;
};

export const validateJSON = (data: any): XWS | undefined => {
  if (!data) {
    console.log('validateJSON', 'No data');
    return undefined;
  }

  if (!data.faction) {
    console.log('validateJSON', 'No faction');
    return undefined;
  }

  const pilots = validatePilots(data.pilots);
  if (!pilots) {
    console.log('validateJSON', 'Invalid list of pilots');
    return undefined;
  }

  const xws: XWS = {
    name: data.name || '',
    description: data.description || '',
    format: data.format || 'Extended',
    faction: data.faction,
    points: data.points,
    version: data.version || '2.0.0',
    pilots,
    vendor: {
      lbn: {
        uid: uuid(),
        wins: 0,
        losses: 0,
        tags: [],
        created: new Date(),
      },
    },
  };

  return xws;
};

export const xwsFromString = async (text: string): Promise<XWS | void> => {
  try {
    if (text.indexOf('https://launchbaynext.app') === 0) {
      const { searchParams } = new URL(text);
      const lbx = searchParams.get('lbx');
      if (lbx) {
        return deserialize(lbx);
      }
    } else if (text.indexOf('https://raithos.github.io/') === 0) {
      const url = text.replace(
        'https://raithos.github.io/',
        'https://squad2xws.herokuapp.com/yasb/xws'
      );
      const xws = await fetch(url)
        .then((r) => r.json())
        .then((d) => validateJSON(d));
      if (xws) {
        return xws;
      }
    } else if (
      text.indexOf(
        'https://squadbuilder.fantasyflightgames.com/squad-preview/'
      ) === 0
    ) {
      const id = text.substr(text.lastIndexOf('/') + 1);
      const xws = await fetch(`https://squad2xws.herokuapp.com/translate/${id}`)
        .then((r) => r.json())
        .then((d) => validateJSON(d));
      if (xws) {
        return xws;
      }
    } else {
      const xws = validateJSON(JSON.parse(text));
      if (xws) {
        return xws;
      }
    }
  } catch (error) {
    console.error({ error });
  }
};
