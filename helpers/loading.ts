import pilotData from 'lbn-core/dist/assets/pilots';
import upgradeData from 'lbn-core/dist/assets/upgrades';
import { keyFromSlot } from 'lbn-core/dist/helpers/convert';
import { allSlots, slotKeys } from 'lbn-core/dist/helpers/enums';
import { getFaction } from 'lbn-core/dist/helpers/import+export';
import { upgradeExists } from 'lbn-core/dist/helpers/unit';
import {
  FactionKey,
  Format,
  Pilot,
  ShipBase,
  ShipType,
  Slot,
  SlotKey,
  Upgrade,
  UpgradeCostAgility,
  UpgradeCostInitiative,
  UpgradeCostSize,
  UpgradeCostValue,
} from 'lbn-core/dist/types';
import { factionFromKey } from './convert';
import { PilotXWS, XWS } from './types';

export interface TShip extends ShipBase {
  pointsWithUpgrades: number;
  pilot?: Pilot;
  dial: string[];
  upgrades?: {
    [key in SlotKey]?: Upgrade[];
  };
}

export type SlotValue = {
  slot: Slot;
  upgrade?: Upgrade;
};

export const pilotExists2 = (pilotXws: PilotXWS, faction: FactionKey) => {
  const ship = pilotData[factionFromKey(faction)][pilotXws.ship];
  if (ship === undefined) {
    return false;
  }
  return Boolean(ship.pilots.find((p) => p.xws === pilotXws.id));
};

export const pointsForSquadron2 = (xws: XWS): number => {
  return xws.pilots
    .filter((pilot) => pilotExists2(pilot, xws.faction))
    .map((pilot) => pointsForShip2(loadShip2(pilot, xws.faction, xws.format)))
    .reduce((s, p) => s + p, 0);
};

export const loadShip2 = (
  pilot: PilotXWS,
  faction: FactionKey,
  format: Format
) => {
  const shipType: ShipType = JSON.parse(
    JSON.stringify(pilotData[getFaction(faction)][pilot.ship])
  );

  const { pilots, ...rest } = shipType;
  const ship: TShip = {
    ...rest,
    pilot: pilots?.find((sp) => sp.xws === pilot.id),
    upgrades: {},
    pointsWithUpgrades: 0,
  };

  Object.keys(cleanupUpgrades2(pilot.upgrades, ship, format)).map((key) => {
    const upgrades = pilot.upgrades?.[key as SlotKey];
    if (upgrades) {
      ship.upgrades![key as SlotKey] = upgrades
        .filter((x) => upgradeExists(key as SlotKey, x))
        .map((u) => loadUpgrade2(u, key as SlotKey, ship));
    }
  });
  ship.pointsWithUpgrades = pointsForShip2(ship);

  return ship;
};

export const pointsForShip2 = (ship: TShip): number =>
  slotKeys
    .map((key) => {
      const upgrade = ship.upgrades && ship.upgrades[key];
      if (upgrade) {
        return upgrade.map((u) => u.finalCost).reduce((s, p) => s + p, 0);
      }
      return 0;
    })
    .reduce((s, p) => s + p, 0) + (ship.pilot?.cost || 0);

export const loadUpgrades2 = (ship?: TShip, format?: Format): SlotValue[] => {
  const checked: { [s: string]: number } = {};

  if (!ship?.pilot?.slots) {
    return [];
  }

  if (
    format === 'Epic' &&
    Boolean(ship?.pilot?.slots) &&
    !ship?.pilot?.slots.find((s) => s === 'Command')
  ) {
    ship.pilot.slots = [...ship.pilot.slots, 'Command'];
  }

  // For ship with Hardpoint
  const extraSlots = ship?.ability?.slotOptions?.find(
    (sl) => ship?.upgrades?.[keyFromSlot(sl)]
  );
  if (extraSlots && Boolean(ship?.pilot?.slots)) {
    ship.pilot.slots = [...ship.pilot.slots, extraSlots];
  }

  return ship?.pilot?.slots.map((slot) => {
    const key = keyFromSlot(slot);
    const i = checked[key] !== undefined ? checked[key] : 0;
    checked[key] = i + 1;

    if (ship.upgrades && ship.upgrades[key]) {
      return { slot, upgrade: ship.upgrades[key]?.[i] };
    } else {
      return { slot, upgrade: undefined };
    }
  });
};

export const pointsForUpgrade2 = (cost: any, ship: TShip): number => {
  if (cost.value) {
    return (cost as UpgradeCostValue).value;
  }
  if (cost.variable && cost.variable === 'agility') {
    const typedCost = cost as UpgradeCostAgility;
    const fresh: ShipType = JSON.parse(
      JSON.stringify(pilotData[ship.faction][ship.xws])
    );
    const agility = fresh.stats.find((s) => s.type === 'agility');
    if (agility) {
      return typedCost.values[agility.value];
    }
  } else if (cost.variable && cost.variable === 'initiative' && ship.pilot) {
    const typedCost = cost as UpgradeCostInitiative;
    return typedCost.values[ship.pilot.initiative];
  } else if (cost.variable && cost.variable === 'size') {
    const typedCost = cost as UpgradeCostSize;
    return typedCost.values[ship.size];
  }
  return 0;
};

export const loadUpgrade2 = (
  xws: string,
  slotKey: SlotKey,
  ship: TShip
): Upgrade => {
  const upgrade: Upgrade = JSON.parse(
    JSON.stringify(upgradeData[slotKey].find((u) => u.xws === xws))
  );

  upgrade.finalCost = pointsForUpgrade2(upgrade.cost, ship);

  if (upgrade.sides[0].grants) {
    upgrade.sides[0].grants.forEach((g) => {
      const { slot, stat, action, side, arc } = g;
      if (slot) {
        if (g.value > 0 && ship.pilot) {
          if (ship.pilot?.slots.indexOf(slot) > 0) {
            ship.pilot?.slots.splice(ship.pilot?.slots.indexOf(slot), 0, slot);
          } else {
            ship.pilot?.slots.push(slot);
          }
        } else {
          ship.pilot?.slots.splice(ship.pilot?.slots.indexOf(slot), 1);
        }
      } else if (stat) {
        const stats = ship.stats.filter(
          (s) => s.type === stat && s.arc === arc
        );
        if (stats.length === 0 && g.value > 0) {
          ship.stats.push({ type: stat, value: g.value, arc });
        } else {
          stats.forEach((s) => (s.value += g.value));
        }
      } else if (action) {
        if (g.value > 0) {
          if (ship.pilot && ship.pilot?.shipActions) {
            ship.pilot?.shipActions.push(action);
          } else {
            ship.actions.push(action);
          }
        } else if (ship.pilot && ship.pilot?.shipActions) {
          const a = ship.pilot?.shipActions.filter(
            (b) => b.type === action.type
          )[0];
          ship.pilot?.shipActions.splice(ship.pilot?.shipActions.indexOf(a), 1);
        } else {
          const a = ship.actions.filter((b) => b.type === action.type)[0];
          ship.actions.splice(ship.actions.indexOf(a), 1);
        }
      } else if (side && ship.pilot) {
        if (!ship.pilot?.sides) {
          ship.pilot.sides = [];
        }
        ship.pilot?.sides.push(side);
      }
    });
  }

  if (upgrade.sides[0].force) {
    if (ship.pilot?.force) {
      ship.pilot.force.value += upgrade.sides[0].force.value;
    } else if (ship.pilot) {
      ship.pilot.force = { ...upgrade.sides[0].force };
    }
  }

  // FIXME: If we get different slots here, it will not work...
  if (upgrade.sides[0].slots && upgrade.sides[0].slots.length > 1) {
    upgrade.sides[0].slots.forEach((s, i) => {
      // Skip first, it has already been taken care of
      if (i === 0) {
        return;
      }
      ship.pilot?.slots.splice(ship.pilot?.slots.indexOf(s), 1);
    });
  }

  return upgrade;
};

export const freeSlotsForShip2 = (ship: TShip) => {
  // Start with loading the ship
  const shipType: ShipType = JSON.parse(
    JSON.stringify(pilotData[ship.faction][ship.xws])
  );
  const pilot = shipType.pilots.find((p) => p.xws === ship.pilot?.xws);

  // Get all available slots from ship
  const freeSlots: { [key in Slot]?: number } = {};
  pilot?.slots.forEach((slot) => {
    freeSlots[slot] = freeSlots[slot] ? freeSlots[slot]! + 1 : 1;
  });

  // Now load each and every upgrade and +/- on free slots
  allSlots.forEach((slot) => {
    const upgrades = ship.upgrades?.[keyFromSlot(slot)];
    if (!upgrades) {
      return;
    }

    upgrades.forEach((u) => {
      // Remove each slot used
      u.sides[0].slots.forEach((us) => {
        freeSlots[us] = freeSlots[us] ? freeSlots[us]! - 1 : -1;
      });

      // Add for each slot granted
      u.sides[0].grants?.forEach((g) => {
        if (!g.slot) {
          return;
        }
        freeSlots[g.slot] = freeSlots[g.slot]
          ? freeSlots[g.slot]! + g.value
          : g.value;
      });
    });
  });

  return freeSlots;
};

export const cleanupUpgrades2 = (
  upgrades: { [key in SlotKey]?: string[] } = {},
  ship: TShip,
  format: Format
) => {
  const usedSlots = freeSlotsForShip2(ship);

  if (upgrades === null) {
    upgrades = {};
  }

  Object.keys(usedSlots).forEach((s) => {
    const slot = s as Slot;
    let count = usedSlots[slot]!;

    if (format === 'Epic' && slot === 'Command') {
      // Command slots for Epic is ok
      count = 0;
    } else if (
      (slot === 'Torpedo' || slot === 'Cannon' || slot === 'Missile') &&
      (ship.xws === 't70xwing' || ship.xws === 'm3ainterceptor')
    ) {
      // Weapon hardpoint, this is ok...
      count = 0;
    }

    while (count < 0) {
      // We need to remove something...
      if (upgrades[keyFromSlot(slot)]?.length) {
        // Just remove from here while we can...
        upgrades[keyFromSlot(slot)]!.splice(
          upgrades[keyFromSlot(slot)]!.length - 1,
          1
        );
        count += 1;
      } else if (ship.upgrades) {
        // Remove upgrades that occupy this kind of slot...
        Object.keys(ship.upgrades || {}).forEach((key) => {
          const ups = ship.upgrades?.[key as SlotKey];
          if (!ups || ups === null) {
            return;
          }
          ups.forEach((upgrade, index) => {
            if (upgrade.sides[0]?.slots.includes(slot) && count < 0) {
              // Remove this one...
              upgrades[key as SlotKey]!.splice(index, 1);
              count += 1;
            }
          });
        });
      }
    }
  });

  try {
    slotKeys.forEach((s) => {
      if (upgrades[s] && upgrades[s]?.length === 0) {
        delete upgrades[s];
      }
    });
  } catch (error) {
    console.error({ error });
  }

  return upgrades;
};
