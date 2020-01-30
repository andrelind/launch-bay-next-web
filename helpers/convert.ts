import { Slot, SlotKey, Squadron, SquadronXWS } from '../types';
import { allSlots, slotKeys } from './enums';

export const slotFromKey = (key: SlotKey): Slot => {
  const index = slotKeys.indexOf(key);
  if (index >= 0) {
    return allSlots[index];
  }
  return 'Force Power';
};

export const keyFromSlot = (slot: Slot): SlotKey => {
  const index = allSlots.indexOf(slot);
  if (index >= 0) {
    return slotKeys[index];
  }
  return 'forcepower';
};

export const xwsFromSquadron = (squadron: Squadron): SquadronXWS => {
  const s = Object.assign({}, squadron);

  return {
    uid: s.uid,
    name: s.name,
    description: '',
    cost: s.cost,
    faction: s.faction,
    favourite: s.favourite,
    format: s.format,
    version: s.version,
    pilots: s.ships.map(ship => {
      const upgrades: { [s: string]: string[] } = {};
      slotKeys.forEach(key => {
        const u = ship.upgrades && ship.upgrades[key];
        if (u) {
          upgrades[key] = u.map(p => p.xws);
        }
      });

      return {
        uid: ship.uid,
        name: ship.pilot.xws,
        ship: ship.xws,
        upgrades,
        cost: ship.pointsWithUpgrades,
      };
    }),
  };
};
