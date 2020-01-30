import { Ship, Squadron } from '../types';
import { slotKeys } from './enums';

export const limitedWarning = (
  xws: string,
  limited: number,
  squadronXWS: string[],
  willSelectNew: boolean
): boolean => {
  if (!limited) {
    return false;
  }
  const count = squadronXWS.filter(x => x === xws.split('-')[0]).length;
  // console.log({ count, squadronXWS, xws });
  return willSelectNew ? count >= limited : count > limited;
};

export const squadronXWS = (squadron?: Squadron) => {
  let list: string[] = [];
  squadron &&
    squadron.ships.forEach(p => {
      list = [...list, ...shipXWS(p)];
    });
  return list;
};

export const shipXWS = (ship?: Ship): string[] => {
  const list = [];
  if (ship) {
    list.push(ship.pilot.xws.split('-')[0]);

    slotKeys.forEach(key => {
      const upgrades = ship.upgrades && ship.upgrades[key];
      if (upgrades) {
        upgrades.filter(u => u).forEach(u => list.push(u.xws.split('-')[0]));
      }
    });
  }

  return list;
};
