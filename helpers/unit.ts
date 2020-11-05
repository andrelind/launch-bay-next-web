import { v4 as uuid } from "uuid";
import pilotData from "../assets/data/pilots";
import upgradeData from "../assets/data/upgrades";
import {
  Faction,
  PilotXWS,
  Ship,
  ShipType,
  SlotKey,
  Squadron,
  SquadronXWS,
  Upgrade,
  UpgradeCostAgility,
  UpgradeCostInitiative,
  UpgradeCostSize,
  UpgradeCostValue,
} from "../types";
import { slotKeys } from "./enums";

export const pilotExists = (faction: Faction, pilotXws: PilotXWS) => {
  const ship = pilotData[faction][pilotXws.ship];
  if (ship === undefined) {
    return false;
  }
  return ship.pilots.filter((p) => p.xws === pilotXws.name)[0] !== undefined;
};

export const upgradeExists = (slot: SlotKey, xws: string) => {
  return upgradeData[slot].filter((u) => u.xws === xws)[0] !== undefined;
};

export const getShip = (
  pilotXws: PilotXWS,
  faction: Faction,
  skipLoadingUpgrades: boolean = false
) => {
  const shipType: ShipType = JSON.parse(
    JSON.stringify(pilotData[faction][pilotXws.ship])
  );

  const { pilots, ...rest } = shipType;
  const ship: Ship = {
    ...rest,
    uid: pilotXws.uid || uuid(),
    pilot: shipType.pilots.filter((p) => p.xws === pilotXws.name)[0],
    upgrades: {},
    pointsWithUpgrades: 0,
  };

  slotKeys.forEach((key) => {
    const up = pilotXws.upgrades ? pilotXws.upgrades[key] : undefined;
    if (up && !skipLoadingUpgrades) {
      // @ts-ignore
      ship.upgrades[key] = up
        .filter((xws) => upgradeExists(key, xws))
        .map((u) => loadUpgrade(u, key, ship, pilotXws, faction));
    }
  });

  return ship;
};

export const loadSquadron = (xws?: SquadronXWS) => {
  if (!xws) {
    return undefined;
  }

  const squadron: Squadron = {
    uid: xws.uid || uuid(),
    name: xws.name || "",
    cost: xws.cost || 0,
    faction: xws.faction,
    format: xws.format || "Hyperspace",
    favourite: xws.favourite || false,
    wins: xws.wins || 0,
    losses: xws.losses || 0,
    created: xws.createdDatestamp ? new Date(xws.createdDatestamp) : new Date(),
    version: xws.version,
    ships: xws.pilots
      .filter((p) => pilotExists(xws.faction, p))
      .map((p) => loadPilot(p, xws.faction)),
  };

  squadron.cost = pointsForSquadron(xws);

  return squadron;
};

export const loadPilot = (pilotXws: PilotXWS, faction: Faction): Ship => {
  const ship = getShip(pilotXws, faction);
  ship.pointsWithUpgrades = pointsForPilot(pilotXws, faction);
  return ship;
};

export const loadUpgrade = (
  xws: string,
  slot: SlotKey,
  ship: Ship,
  pilotXws: PilotXWS,
  faction: Faction
): Upgrade => {
  const upgrade: Upgrade = JSON.parse(
    JSON.stringify(upgradeData[slot].filter((u) => u.xws === xws)[0])
  );

  upgrade.finalCost = pointsForUpgrade(upgrade.cost, pilotXws, faction);

  if (upgrade.sides[0].grants) {
    upgrade.sides[0].grants.forEach((g) => {
      const { slot, stat, action, side } = g;
      if (slot) {
        if (g.value > 0) {
          if (ship.pilot.slots.indexOf(slot) > 0) {
            ship.pilot.slots.splice(ship.pilot.slots.indexOf(slot), 0, slot);
          } else {
            ship.pilot.slots.push(slot);
          }
        } else {
          ship.pilot.slots.splice(ship.pilot.slots.indexOf(slot), 1);
        }
      } else if (stat) {
        const stats = ship.stats.filter((s) => s.type === stat);
        if (stats.length === 0 && g.value > 0) {
          ship.stats.push({ type: stat, value: g.value });
        } else {
          stats.forEach((s) => (s.value += g.value));
        }
      } else if (action) {
        if (g.value > 0) {
          if (ship.pilot && ship.pilot.shipActions) {
            ship.pilot.shipActions.push(action);
          } else {
            ship.actions.push(action);
          }
        } else if (ship.pilot && ship.pilot.shipActions) {
          const a = ship.pilot.shipActions.filter(
            (b) => b.type === action.type
          )[0];
          ship.pilot.shipActions.splice(ship.pilot.shipActions.indexOf(a), 1);
        } else {
          const a = ship.actions.filter((b) => b.type === action.type)[0];
          ship.actions.splice(ship.actions.indexOf(a), 1);
        }
      } else if (side && ship.pilot) {
        if (!ship.pilot.sides) {
          ship.pilot.sides = [];
        }
        ship.pilot.sides.push(side);
      }
    });
  }

  if (upgrade.sides[0].force) {
    if (ship.pilot.force) {
      ship.pilot.force.value += upgrade.sides[0].force.value;
    } else {
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
      ship.pilot.slots.splice(ship.pilot.slots.indexOf(s), 1);
    });
  }

  return upgrade;
};

export const pointsForSquadron = (squadron: SquadronXWS): number => {
  return squadron.pilots
    .filter((pilot) => pilotExists(squadron.faction, pilot))
    .map((pilot) => pointsForPilot(pilot, squadron.faction))
    .reduce((s, p) => s + p, 0);
};

export const pointsForPilot = (
  pilotXws: PilotXWS,
  faction: Faction
): number => {
  const ship = getShip(pilotXws, faction);

  if (!ship.pilot) {
    return 0;
  }

  return (
    slotKeys
      .map((key) => {
        const upgrade = ship.upgrades && ship.upgrades[key];
        if (upgrade) {
          return upgrade.map((u) => u.finalCost).reduce((s, p) => s + p, 0);
        }
        return 0;
      })
      .reduce((s, p) => s + p, 0) + ship.pilot.cost
  );
};

export const pointsForUpgrade = (
  cost: any,
  pilotXws: PilotXWS,
  faction: Faction
): number => {
  const ship = getShip(pilotXws, faction, true);

  if (cost.value) {
    return (cost as UpgradeCostValue).value;
  }
  if (cost.variable && cost.variable === "agility") {
    const typedCost = cost as UpgradeCostAgility;
    const agility = ship.stats.find((s) => s.type === "agility");
    if (agility) {
      return typedCost.values[agility.value];
    }
  } else if (cost.variable && cost.variable === "initiative") {
    const typedCost = cost as UpgradeCostInitiative;
    return typedCost.values[ship.pilot.initiative];
  } else if (cost.variable && cost.variable === "size") {
    const typedCost = cost as UpgradeCostSize;
    return typedCost.values[ship.size];
  }
  return 0;
};

export const copyPilot = (pilot: PilotXWS): PilotXWS => {
  const newUnit = JSON.parse(JSON.stringify(pilot));
  newUnit.uid = uuid();

  return newUnit;
};
