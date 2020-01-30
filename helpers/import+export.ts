// import { Alert, Clipboard } from 'react-native';
import uuid from 'uuid/v4';

import xwsMap from '../assets/data/ffg-xws';
import upgradeData from '../assets/data/upgrades';
import { Faction, FactionKey, SlotKey, Squadron, SquadronXWS } from '../types';
import { xwsFromSquadron } from './convert';
import { slotKeys } from './enums';
import { getFactionKey, serialize } from './serializer';

const validatePilot = (pilot: any): Object | void => {
  if (!pilot.upgrades) {
    pilot.upgrades = {};
  }

  if (!pilot.name && pilot.id) {
    pilot.name = pilot.id;
  }

  const { name, ship, upgrades } = pilot;
  if (!name || !ship) {
    console.log('No XWS');
    return undefined;
  }

  if (upgrades.ept) {
    upgrades.talent = upgrades.ept;
    delete upgrades.ept;
  }
  if (upgrades.amd) {
    upgrades.astromech = upgrades.amd;
    delete upgrades.amd;
  }
  if (upgrades.mod) {
    upgrades.modification = upgrades.mod;
    delete upgrades.mod;
  }
  if (upgrades.hardpoint) {
    delete upgrades.hardpoint;
  }
  if (upgrades['force-power']) {
    upgrades.forcepower = upgrades['force-power'];
    delete upgrades['force-power'];
  }

  slotKeys.forEach(key => {
    // YASB...
    if (slotKeys.indexOf(key) < 0) {
      // No unknown keys please
      console.log(`Unknown key ${key}`);
      return undefined;
    }
    if (upgradeData[key] === undefined) {
      console.log(`Unknown key ${key}`);
      return undefined;
    }
    if (!Array.isArray(upgrades[key])) {
      console.log(`Not an array ${key}`);
      return undefined;
    }

    const list = upgrades[key];
    for (let j = 0; j < list.length; j++) {
      const item = list[j];
      if (upgradeData[key].filter(u => u.xws === item).length === 0) {
        console.log(`Invalid item ${item}`);
        return undefined;
      }
    }
  });

  if (!pilot.uid) {
    pilot.uid = uuid();
  }

  return pilot;
};

const validatePilots = (list: Array<any>): Array<any> | void => {
  console.log(list);
  if (!Array.isArray(list)) {
    console.log(`Not an array - ${typeof list}`);
    return undefined;
  }

  for (let i = 0; i < list.length; i++) {
    let o = list[i];
    if (typeof o !== 'object') {
      console.log('Invalid unit');
      return undefined;
    }
    o = validatePilot(o);
    if (!o) {
      return undefined;
    }
  }

  return list;
};

const validateJSON = (data: any): any | void => {
  if (!data) {
    return undefined;
  }

  if (!data.faction) {
    return undefined;
  }

  const pilots = validatePilots(data.pilots);
  if (!pilots) {
    console.log('Invalid list of pilots');
    return undefined;
  }

  return data;
};

export const canImportXws = (onImport: (data: SquadronXWS) => void) => {
  console.log(onImport);
  // Clipboard.getString().then(data => {
  //   let json;
  //   try {
  //     json = JSON.parse(data);
  //   } catch (err) {
  //     console.log(err);
  //     Alert.alert(
  //       'Invalid XWS',
  //       'Copy the XWS data into the clipboard before pressing "import"',
  //     );
  //     return;
  //   }
  //   if (!json) {
  //     return;
  //   }
  //   const validatedJson = validateJSON(json);
  //   if (validatedJson) {
  //     if (!validatedJson.uid) {
  //       validatedJson.uid = uuid();
  //     }
  //     validatedJson.cost = validatedJson.points;
  //     delete validatedJson.points;
  //     validatedJson.faction = getFaction(json.faction);
  //     validatedJson.ships = validatedJson.ships || [];
  //     validatedJson.format = validatedJson.format || 'Extended';
  //     onImport(json);
  //   } else {
  //     Alert.alert('Invalid XWS', 'The XWS data in clipboard is invalid');
  //   }
  // });
};

export const getFaction = (faction: string): Faction => {
  switch (faction) {
    case 'rebel':
    case 'rebelalliance':
      return 'Rebel Alliance';

    case 'scumandvillainy':
    case 'scum':
      return 'Scum and Villainy';

    case 'galacticempire':
    case 'imperial':
      return 'Galactic Empire';

    case 'resistance':
      return 'Resistance';

    case 'firstorder':
      return 'First Order';

    case 'galacticrepublic':
      return 'Galactic Republic';

    case 'separatistalliance':
      return 'Separatist Alliance';

    default:
      return 'Rebel Alliance';
  }
};

type ExportXWS = {
  name: string;
  description: string;
  faction: FactionKey;
  points: number;
  version: string;
  pilots: {
    id: string;
    ship: string;
    points: number;
    upgrades: { [key in SlotKey]?: string[] };
  }[];
  vendor: {
    lbn: {
      builder: string;
      builder_url: string;
      link: string;
    };
  };
};

export const exportAsXws = (squadron: Squadron) => {
  const xws = xwsFromSquadron(squadron);
  const link = serialize(xws);

  const e: ExportXWS = {
    name: xws.name,
    description: xws.description || '',
    faction: getFactionKey(xws.faction),
    points: xws.cost,
    version: xws.version || '2.0.0',
    pilots: xws.pilots.map(p => ({
      id: p.name,
      ship: p.ship,
      points: p.cost || 0,
      upgrades: p.upgrades || {},
    })),
    vendor: {
      lbn: {
        builder: 'Launch Bay Next',
        builder_url: 'https://launch-bay-next.herokuapp.com',
        link: `https://launch-bay-next.herokuapp.com/print?lbx=${link}`,
      },
    },
  };

  return JSON.stringify(e);
  // const json = JSON.stringify(e);
  // Clipboard.setString(json);
  // Alert.alert('XWS Exported', 'All data has been copied to your clipboard');
};

export const exportAsText = (squadron: Squadron) => {
  let text = `${squadron.name}\n`;

  squadron.ships.map(ship => {
    text += `\n(${ship.pilot.cost}) ${ship.pilot.name} [${ship.name}]`;

    slotKeys.forEach(key => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach(u => {
          text += `\n(${u.finalCost}) ${u.name}`;
        });
      }
    });
    text += `\nPoints: ${ship.pointsWithUpgrades}\n`;
  });

  text += `\nTotal points: ${squadron.cost}`;
  console.log(text);
  return text;
  // Clipboard.setString(text);
  // Alert.alert('Text Exported', 'All data has been copied to your clipboard');
};

export const exportAsTTS = (squadron: Squadron) => {
  let text = '';

  squadron.ships.map(ship => {
    text += ship.pilot.name;

    slotKeys.forEach(key => {
      const up = ship.upgrades && ship.upgrades[key];
      if (up) {
        up.forEach(u => {
          text += ` + ${u.name}`;
        });
      }
    });
    text += ' / ';
  });

  console.log(text);
  return text;
  // Clipboard.setString(text);
  // Alert.alert('TTS Exported', 'All data has been copied to your clipboard');
};

export const exportAsQR = (squadron: Squadron) => {
  const xws = xwsFromSquadron(squadron);
  return serialize(xws);
};

export const importFromQR = (data: any, skipParse: boolean = false) => {
  try {
    const json = skipParse ? data : JSON.parse(data);
    const validatedJson = validateJSON(json);
    if (!validatedJson) {
      console.log('Could not validate json');
      return undefined;
    }
    if (!validatedJson.uid) {
      validatedJson.uid = uuid();
    }
    validatedJson.name = validatedJson.name || 'New Squadron';
    validatedJson.cost = validatedJson.points;
    delete validatedJson.points;
    validatedJson.faction = getFaction(json.faction);
    validatedJson.ships = validatedJson.ships || [];
    validatedJson.format = validatedJson.format || 'Hyperspace';
    console.log(validatedJson);
    return validatedJson;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const convertFromFFG = (ffgSquad: any) => {
  console.log(ffgSquad);
  const {
    faction,
    // id = '',
    description = '',
    name = '',
    deck = [],
    cost = 0,
    game_format,
  } = ffgSquad;

  const pilots = deck.map(
    (
      {
        pilot_card = {},
        slots = [],
        cost = 0,
      }: { pilot_card: any; slots: any[]; cost: any },
      index: number
    ) => {
      const { id: pilotId, name: pilotName = '', ship_type } = pilot_card;
      const xwsId = xwsMap.pilots[pilotId];
      if (!xwsId) {
        throw new Error(
          `Unknown pilot with ID "${pilotId}" (name: "${pilotName}") in ship ${index +
            1}`
        );
      }
      const ship = xwsMap.ships[ship_type];
      const upgrades: { [key in SlotKey]?: string[] } = {};
      slots.forEach(
        ({ upgrade_types, id: upgradeId, name: upgradeName = '' }) => {
          const slotId = upgrade_types[0];
          let slot = xwsMap.slots[`${slotId}`];
          console.log({ slot });
          if (!slot) {
            throw new Error(
              `Unknown slot with ID "${slotId}" for upgrade "${upgradeName}"`
            );
          }
          const upgradeXwsID = xwsMap.upgrades[upgradeId];
          // console.log({ upgradeXwsID });
          if (!upgradeXwsID) {
            throw new Error(
              `Unknown upgrade with ID "${upgradeId}" (name: "${upgradeName}") for pilot ${pilotName}`
            );
          }

          // Fix for FFG mismatch
          if (
            upgradeXwsID === 'calibratedlasertargeting' &&
            slot === 'modification'
          ) {
            slot = 'configuration';
          }

          if (!Array.isArray(upgrades[slot])) {
            upgrades[slot] = [];
          }
          const u = upgrades[slot];
          u && u.push(upgradeXwsID);
        }
      );

      const result = {
        uid: uuid(),
        name: xwsId,
        upgrades,
        cost,
        ship,
      };

      return result;
    }
  );

  const parsedFaction: Faction = xwsMap.factions[faction.id];

  const xws = {
    uid: uuid(),
    name,
    description,
    pilots,
    cost,
    favourite: false,
    format: game_format.name,
    faction: parsedFaction,
    version: '2.0.0',
  };

  console.log(xws);
  return xws;
};
