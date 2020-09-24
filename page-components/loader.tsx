import { pointsForUpgrade } from 'helpers/unit';

import pilotData from '../assets/data/pilots';
import upgradeData from '../assets/data/upgrades';
import { keyFromSlot } from '../helpers/convert';
import { allSlots, slotKeys } from '../helpers/enums';
import { Pilot, Ship, ShipType, Slot, Squadron, Upgrade } from '../types';

export type ShipValue = {
  ship: ShipType;
  label: string;
  value: string;
};

export type PilotValue = {
  pilot: Pilot;
  label: string;
  value: string;
};

export type SlotValue = {
  slot: Slot;
  upgrade?: Upgrade;
};

export type UpgradeValue = {
  upgrade: Upgrade;
  label: string;
  value: string;
};

export const loadShips = (squadron: Squadron): ShipValue[] => {
  return (
    Object.keys(pilotData[squadron.faction])
      .map(key => pilotData[squadron.faction][key])
      .filter((s: ShipType) => {
        switch (squadron.format) {
          case 'Extended':
            return s.size !== 'Huge';
          case 'Hyperspace':
            return s.pilots.filter(p => p.hyperspace).length > 0;
          case 'Epic':
            return s.pilots.filter(p => p.epic).length > 0;
        }
      })
      // .filter(p => {
      //   p.available = countForShip(p.xws, collection, squadron);
      //   if (p.available !== undefined && p.available <= 0 && !showUnavailable) {
      //     return false;
      //   }
      //   return true;
      // })
      .sort((a, b) => a.name.en.localeCompare(b.name.en))
      .map(s => ({
        value: s.xws,
        label: s.name.en,
        ship: {
          ...s,
          pilots: s.pilots.filter((p: Pilot) => {
            switch (squadron.format) {
              case 'Extended':
                return true;
              case 'Hyperspace':
                return p.hyperspace;
              case 'Epic':
                return p.epic;
            }
          }),
        },
      }))
  );
};

export const shipForXws = (squadron: Squadron, shipXws: string): ShipValue => {
  const ship = Object.keys(pilotData[squadron.faction])
    .map(key => pilotData[squadron.faction][key])
    .find(s => s.xws === shipXws);
  return {
    value: ship.xws,
    label: ship.name.en,
    ship,
  };
};

export const pilotForXws = (
  squadron: Squadron,
  shipXws: string,
  pilotWxs: string
): PilotValue => {
  const ship = Object.keys(pilotData[squadron.faction])
    .map(key => pilotData[squadron.faction][key])
    .find(s => s.xws === shipXws);
  const pilot = ship.pilots.find(p => p.xws === pilotWxs);
  return {
    value: pilot.xws,
    label: pilot.name.en,
    pilot,
  };
};

export const pilotOptions = (value: ShipValue): PilotValue[] => {
  return value.ship.pilots
    .map((p: Pilot) => ({
      value: p.name.en,
      label: `${p.initiative} - ${p.name} [${p.cost}]`,
      pilot: p,
    }))
    .sort((a, b) => {
      if (a.pilot.initiative < b.pilot.initiative) {
        return 1;
      } else if (a.pilot.initiative > b.pilot.initiative) {
        return -1;
      } else if (a.pilot.cost < b.pilot.cost) {
        return 1;
      } else if (a.pilot.cost > b.pilot.cost) {
        return -1;
      }
      return a.pilot.name.en
        .toLowerCase()
        .localeCompare(b.pilot.name.en.toLowerCase());
    });
};

export const getUpgrades = (
  squadron: Squadron,
  ship: Ship,
  extraSlots: Slot[]
): SlotValue[] => {
  const checked: { [s: string]: number } = {};

  if (
    squadron.format === 'Epic' &&
    !ship.pilot.slots.find(s => s === 'Command')
  ) {
    ship.pilot.slots = [...ship.pilot.slots, 'Command'];
  }
  ship.pilot.slots = [...ship.pilot.slots, ...extraSlots];

  // if (
  //   ship.pilot.shipAbility &&
  //   ship.upgrades &&
  //   ship.pilot.shipAbility.slotOptions &&
  //   ship.pilot.shipAbility.slotOptions.find(
  //     sl => ship.upgrades && ship.upgrades[keyFromSlot(sl)]
  //   )
  // ) {
  //   const slot = ship.pilot.shipAbility.slotOptions.find(
  //     sl => ship.upgrades && ship.upgrades[keyFromSlot(sl)]
  //   );
  //   ship.pilot.slots = [...ship.pilot.slots, slot];
  // }

  return ship.pilot.slots.map(slot => {
    const key = keyFromSlot(slot);
    const i = checked[key] !== undefined ? checked[key] : 0;
    checked[key] = i + 1;

    if (ship.upgrades && ship.upgrades[key]) {
      return { slot, upgrade: ship.upgrades[key][i] };
    } else {
      return { slot, upgrade: null };
    }
  });
};

export const upgradesForSlot = (
  squadron: Squadron,
  ship: Ship,
  slot: Slot
): UpgradeValue[] => {
  // const { navigation, collection, showUnavailable } ;

  const freeSlots = {};
  allSlots.map(s => {
    const count = ship.pilot.slots.filter(is => is === s).length;
    freeSlots[s] = count;
  });

  const data = upgradeData[keyFromSlot(slot)]
    .map(u => ({
      ...u,
      finalCost: pointsForUpgrade(
        u.cost,
        { uid: '', ship: ship.xws, name: ship.pilot.xws },
        ship.faction
      ),
      available: 0,
    }))
    .filter((u: Upgrade) => {
      switch (squadron.format) {
        case 'Extended':
          return true;
        case 'Hyperspace':
          return u.hyperspace;
        case 'Epic':
          return u.epic;
      }
    })
    .filter((u: Upgrade) => {
      // u.available = countForUpgrade(u.xws, collection, squadron);

      // if (
      //   u.available !== undefined &&
      //   u.available !== null &&
      //   u.available <= 0 &&
      //   !showUnavailable
      // ) {
      //   return false;
      // }

      const neededSlots = {};
      allSlots.map(s => {
        neededSlots[s] = u.sides[0].slots.filter(is => is === s).length;
      });

      for (var i = 0; i < allSlots.length; i++) {
        if (
          neededSlots[allSlots[i]] > 1 &&
          freeSlots[allSlots[i]] < neededSlots[allSlots[i]]
        ) {
          return false;
        }
      }
      return true;
    })
    .filter((u: Upgrade) => {
      // Only 1 upgrade of each allowed
      // if (shipXws && shipXws.indexOf(u.xws) >= 0) {
      //   return false;
      // }

      if (!u.restrictions) {
        return true;
      }

      for (let j = 0; j < u.restrictions.length; j++) {
        const res = u.restrictions[j];
        let found = false;

        if (res.factions && res.factions.indexOf(squadron.faction) >= 0) {
          found = true;
        } else if (res.baseSizes && res.baseSizes.indexOf(ship.size) >= 0) {
          found = true;
        } else if (res.chassis && res.chassis.indexOf(ship.xws) >= 0) {
          found = true;
        } else if (
          res.arcs &&
          res.arcs.filter(a => ship.stats.filter(s => s.arc === a).length > 0)
            .length > 0
        ) {
          found = true;
        } else if (
          res.action &&
          ship.pilot &&
          ship.pilot.shipActions &&
          ship.pilot.shipActions.find(a => {
            if (!res.action) {
              return false;
            }
            if (res.action.difficulty) {
              return (
                a.type === res.action.type &&
                a.difficulty === res.action.difficulty
              );
            }
            return a.type === res.action.type;
          })
        ) {
          found = true;
        } else if (
          res.action &&
          ship.actions &&
          !ship.pilot.shipActions &&
          ship.actions.find(a => {
            if (!res.action) {
              return false;
            }
            if (res.action && res.action.difficulty) {
              return (
                a.type === res.action.type &&
                a.difficulty === res.action.difficulty
              );
            }
            return a.type === res.action.type;
          })
        ) {
          found = true;
        } else if (
          res.sides &&
          res.sides.find(
            s => ship.pilot.sides && ship.pilot.sides.indexOf(s) >= 0
          )
        ) {
          found = true;
        } else if (
          res.equipped &&
          ship.upgrades &&
          res.equipped.filter(
            e => ship.upgrades && ship.upgrades[keyFromSlot(e)]
          ).length === res.equipped.length
        ) {
          found = true;
        } else if (res['non-limited'] && ship.pilot.limited === 0) {
          found = true;
        } else if (
          ship.stats.find(
            s =>
              res.stat && s.type === res.stat.type && s.value >= res.stat.value
          )
        ) {
          found = true;
        } else if (res.initiative && ship.pilot.initiative >= res.initiative) {
          found = true;
        }

        if (res.character) {
          squadron.ships.forEach(ship => {
            if (res.character && res.character.indexOf(ship.pilot.xws) >= 0) {
              found = true;
            } else if (res.character) {
              res.character.forEach(c => {
                slotKeys.forEach(key => {
                  // We need to check all the upgrades also...
                  const upgrades = ship.upgrades && ship.upgrades[key];
                  if (!upgrades) {
                    return false;
                  }
                  if (upgrades.find(u => u.xws === c)) {
                    found = true;
                  }
                });
              });
            }
          });
        }

        if (!found) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      if (a.finalCost < b.finalCost) {
        return -1;
      } else if (a.finalCost > b.finalCost) {
        return 1;
      }
      return a.sides[0].title.en.localeCompare(b.sides[0].title.en);
    });

  return data.map(u => ({
    label: u.sides[0].title.en,
    value: u.xws,
    upgrade: u,
  }));
};
