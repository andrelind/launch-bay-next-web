import sources from 'lbn-core/dist/assets/sources';
import { slotKeys, sourceKeys } from 'lbn-core/dist/helpers/enums';
import { SlotKey } from 'lbn-core/dist/types';
import { CollectionState, XWS } from './types';

export type TCollection = {
  timestamp: string;
  expansions: { [s: string]: number };
  pilots: { [s: string]: number };
  ships: { [s: string]: number };
  upgrades: { [s: string]: number };
};

export type Availability = {
  ships: {
    xws: string;
    count: number;
    sources: string[];
  }[];
  pilots: {
    xws: string;
    shipXws: string;
    count: number;
    sources: string[];
  }[];
  upgrades: {
    xws: string;
    key: SlotKey;
    count: number;
    sources: string[];
  }[];
};

const validCollection2 = (collection?: CollectionState): boolean => {
  return (
    Object.keys(collection?.expansions || {}).length > 0 ||
    Object.keys(collection?.ships || {}).length > 0 ||
    Object.keys(collection?.upgrades || {}).length > 0
  );
};

// export const useAvailability = (xws?: XWS): Availability => {
//   const collection = collectionStore();
//   const availability: Availability = { ships: [], pilots: [], upgrades: [] };
//   if (!xws) {
//     return availability;
//   }

//   xws.pilots.forEach(pilot => {
//     if (!availability.ships.find(s => s.xws === pilot.ship)) {
//       availability.ships.push({
//         xws: pilot.ship,
//         count: countForShip2(collection, pilot.ship, xws),
//         sources: sourcesForShip2(pilot.ship),
//       });
//     }

//     if (!availability.pilots.find(s => s.xws === pilot.id)) {
//       availability.pilots.push({
//         xws: pilot.id,
//         shipXws: pilot.ship,
//         count: countForPilot2(collection, pilot.id, xws),
//         sources: sourcesForPilot2(pilot.id),
//       });
//     }

//     slotKeys.forEach(slotKey => {
//       const upgrades = pilot.upgrades && pilot.upgrades[slotKey];
//       if (!upgrades) {
//         return;
//       }

//       upgrades.forEach(u => {
//         if (!availability.upgrades.find(a => a.xws === u)) {
//           availability.upgrades.push({
//             xws: u,
//             key: slotKey,
//             count: countForUpgrade2(collection, u, xws),
//             sources: sourcesForUpgrade2(u),
//           });
//         }
//       });
//     });
//   });

//   return availability;
// };

export const countForShip2 = (
  collection: CollectionState,
  shipXws: string,
  xws?: XWS
): number => {
  if (!validCollection2(collection)) {
    return 0;
  }

  const { expansions, ships } = collection;

  let count = 0;
  // Map all of the factions sources
  sourceKeys.forEach((key) => {
    const s = sources[key];
    if (s) {
      s.forEach((ss) => {
        count += (ss.contents.ships[shipXws] || 0) * (expansions[ss.xws] || 0);
      });
    }
  });

  // Add singles
  count += ships[shipXws] || 0;

  if (xws) {
    // Number of ships used in squadron already
    count -= xws.pilots.filter((s) => s.ship === shipXws).length;
  }

  return count;
};

export const countForPilot2 = (
  collection: CollectionState,
  pilotXws: string,
  xws?: XWS
): number => {
  if (!validCollection2(collection)) {
    return 0;
  }

  const { expansions, pilots } = collection;

  let count = 0;
  // Map all of the factions sources
  sourceKeys.forEach((key) => {
    const s = sources[key];
    if (s) {
      s.forEach((ss) => {
        // Number of ships in expansion x number of expansions
        count +=
          (ss.contents.pilots[pilotXws] || 0) * (expansions[ss.xws] || 0);
      });
    }
  });

  // Add singles
  count += pilots[pilotXws] || 0;

  if (xws) {
    // Number of ships used in squadron already
    count -= xws.pilots.filter((s) => s.id === pilotXws).length;
  }

  return count;
};

export const countForUpgrade2 = (
  collection: CollectionState,
  upgradeXws: string,
  xws?: XWS
): number => {
  if (!validCollection2(collection)) {
    return 0;
  }

  const { expansions, upgrades } = collection;

  let count = 0;
  // Map all of the factions sources
  sourceKeys.forEach((key) => {
    const s = sources[key];
    if (s) {
      s.forEach((ss) => {
        // Number of items in expansion x number of expansions
        count +=
          (ss.contents.upgrades[upgradeXws] || 0) * (expansions[ss.xws] || 0);
      });
    }
  });
  // Add singles
  count += upgrades[upgradeXws] || 0;

  if (xws) {
    // Number of upgrades used in squadron already
    xws.pilots.forEach((s) => {
      slotKeys.forEach((key) => {
        const p = s.upgrades && s.upgrades[key];
        if (p) {
          count -= p.filter((u) => u === upgradeXws).length;
        }
      });
    });
  }

  return count;
};

export const sourcesForShip2 = (shipXws: string): string[] => {
  const list: string[] = [];
  // Map all of the factions sources
  sourceKeys.forEach((key) => {
    const s = sources[key];
    if (s) {
      list.push(
        ...s.filter((ss) => ss.contents.ships[shipXws]).map((ss) => ss.name)
      );
    }
  });

  return list;
};

export const sourcesForPilot2 = (pilotXws: string): string[] => {
  const list: string[] = [];
  // Map all of the factions sources
  sourceKeys.forEach((key) => {
    const s = sources[key];
    if (s) {
      list.push(
        ...s.filter((ss) => ss.contents.pilots[pilotXws]).map((ss) => ss.name)
      );
    }
  });
  return list;
};

export const sourcesForUpgrade2 = (upgradeXws: string): string[] => {
  const list: string[] = [];
  // Map all of the factions sources
  sourceKeys.forEach((key) => {
    const s = sources[key];
    if (s) {
      list.push(
        ...s
          .filter((ss) => ss.contents.upgrades[upgradeXws])
          .map((ss) => ss.name)
      );
    }
  });
  return list;
};
