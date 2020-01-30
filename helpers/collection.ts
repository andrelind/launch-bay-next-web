import sources from '../assets/data/sources';
import { CollectionState } from '../reducers/collection';
import { Ship, SlotKey, Source, Squadron, Upgrade } from '../types';
import { slotKeys, sourceKeys } from './enums';

const validCollection = (collection?: CollectionState): boolean => {
  if (!collection) {
    return false;
  }
  return (
    Object.keys(collection.expansions).length > 0 ||
    Object.keys(collection.ships).length > 0 ||
    Object.keys(collection.upgrades).length > 0
  );
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

export const availabilityForSquadron = (
  collection: CollectionState,
  squadron?: Squadron
): Availability => {
  const availability: Availability = { ships: [], pilots: [], upgrades: [] };
  if (!squadron) {
    return availability;
  }

  squadron.ships.forEach(ship => {
    if (!availability.ships.find(s => s.xws === ship.xws)) {
      availability.ships.push({
        xws: ship.xws,
        count: countForShip(ship.xws, collection, squadron),
        sources: sourcesForShip(ship.xws),
      });
    }

    if (!availability.pilots.find(s => s.xws === ship.pilot.xws)) {
      availability.pilots.push({
        xws: ship.pilot.xws,
        shipXws: ship.xws,
        count: countForPilot(ship.pilot.xws, collection, squadron),
        sources: sourcesForPilot(ship.pilot.xws),
      });
    }

    slotKeys.forEach(slotKey => {
      const upgrades = ship.upgrades && ship.upgrades[slotKey];
      if (!upgrades) {
        return;
      }

      upgrades.forEach(u => {
        if (!availability.upgrades.find(a => a.xws === u.xws)) {
          availability.upgrades.push({
            xws: u.xws,
            key: slotKey,
            count: countForUpgrade(u.xws, collection, squadron),
            sources: sourcesForUpgrade(u.xws),
          });
        }
      });
    });
  });

  return availability;
};

export const countForShip = (
  xws: string,
  collection?: CollectionState,
  squadron?: Squadron
): number => {
  if (!validCollection(collection) || !collection) {
    return 0;
  }

  let count = 0;
  // Map all of the factions sources
  sourceKeys.forEach(key => {
    const s = sources[key];
    if (s) {
      s.forEach(s => {
        count +=
          (s.contents.ships[xws] || 0) * (collection.expansions[s.xws] || 0);
      });
    }
  });

  // Add singles
  count += collection.ships[xws] || 0;

  if (squadron) {
    // Number of ships used in squadron already
    count -= squadron.ships.filter((s: Ship) => s.xws === xws).length;
  }

  return count;
};

export const countForPilot = (
  xws: string,
  collection?: CollectionState,
  squadron?: Squadron
): number => {
  if (!validCollection(collection) || !collection) {
    return 0;
  }

  let count = 0;
  // Map all of the factions sources
  sourceKeys.forEach(key => {
    const s = sources[key];
    if (s) {
      s.forEach((s: Source) => {
        // Number of ships in expansion x number of expansions
        count +=
          (s.contents.pilots[xws] || 0) * (collection.expansions[s.xws] || 0);
      });
    }
  });

  // Add singles
  count += collection.pilots[xws] || 0;

  if (squadron) {
    // Number of ships used in squadron already
    count -= squadron.ships.filter((s: Ship) => s.pilot.xws === xws).length;
  }

  return count;
};

export const countForUpgrade = (
  xws: string,
  collection?: CollectionState,
  squadron?: Squadron
): number => {
  if (!validCollection(collection) || !collection) {
    return 0;
  }

  let count = 0;
  // Map all of the factions sources
  sourceKeys.forEach(key => {
    const s = sources[key];
    if (s) {
      s.forEach((s: Source) => {
        // Number of items in expansion x number of expansions
        count +=
          (s.contents.upgrades[xws] || 0) * (collection.expansions[s.xws] || 0);
      });
    }
  });
  // Add singles
  count += collection.upgrades[xws] || 0;

  if (squadron) {
    // Number of upgrades used in squadron already
    squadron.ships.forEach(s => {
      slotKeys.forEach(key => {
        const p = s.upgrades && s.upgrades[key];
        if (p) {
          count -= p.filter((u: Upgrade) => u.xws === xws).length;
        }
      });
    });
  }

  return count;
};

export const sourcesForShip = (xws: string): string[] => {
  const list: string[] = [];
  // Map all of the factions sources
  sourceKeys.forEach(key => {
    const s = sources[key];
    if (s) {
      list.push(...s.filter(s => s.contents.ships[xws]).map(s => s.name));
    }
  });

  return list;
};

export const sourcesForPilot = (xws: string): string[] => {
  const list: string[] = [];
  // Map all of the factions sources
  sourceKeys.forEach(key => {
    const s = sources[key];
    if (s) {
      list.push(...s.filter(s => s.contents.pilots[xws]).map(s => s.name));
    }
  });
  return list;
};

export const sourcesForUpgrade = (xws: string): string[] => {
  const list: string[] = [];
  // Map all of the factions sources
  sourceKeys.forEach(key => {
    const s = sources[key];
    if (s) {
      list.push(...s.filter(s => s.contents.upgrades[xws]).map(s => s.name));
    }
  });
  return list;
};
