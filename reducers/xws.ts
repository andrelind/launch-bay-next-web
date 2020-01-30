import { Actions } from 'actions/';
import { FULL_SYNC } from 'actions/sync';
import { allSlots } from 'helpers/enums';
import uuid from 'uuid/v4';

import {
  ADD_SHIP,
  ADD_SQUADRON,
  CHANGE_PILOT,
  COPY_SHIP,
  COPY_SQUADRON,
  DECREASE_SQUADRON_LOSSES,
  DECREASE_SQUADRON_WINS,
  IMPORT_SQUADRON,
  INCREASE_SQUADRON_LOSSES,
  INCREASE_SQUADRON_WINS,
  REMOVE_SHIP,
  REMOVE_SQUADRON,
  RENAME_SQUADRON,
  SET_UPGRADE,
  TOGGLE_FAVOURITE_SQUADRON,
  TOGGLE_FORMAT_SQUADRON,
} from '../actions/squadrons';
import { keyFromSlot } from '../helpers/convert';
import { loadPilot, pointsForSquadron } from '../helpers/unit';
import { bumpMinor, bumpPatch } from '../helpers/versioning';
import { PilotXWS, Ship, SquadronXWS } from '../types';

export type State = SquadronXWS[];

const initialState: SquadronXWS[] = [];

export default function onAction(
  state: State = initialState,
  action: Actions
): State {
  if (!action.type) {
    return state;
  }

  // const squadronList = [];
  // state.forEach(s => {
  //   if (squadronList.filter(x => x.uid === s.uid).length === 0) {
  //     squadronList.push(s);
  //   }
  // });
  // state = squadronList;

  switch (action.type) {
    case ADD_SQUADRON: {
      const s = {
        uid: action.uid,
        name: 'New Squadron',
        faction: action.faction,
        format: action.format,
        favourite: false,
        pilots: [],
        cost: 0,
        createdDatestamp: new Date().getTime(),
        version: '2.0.0',
      };

      return [...state.filter(s => s.pilots.length > 0), s];
    }

    case FULL_SYNC: {
      const { squadrons } = action.payload;

      return [...state, ...squadrons];
    }

    case IMPORT_SQUADRON: {
      const { squadron } = action;

      if (!squadron.uid) {
        squadron.uid = uuid();
      }
      squadron.pilots.forEach(ship => {
        if (!ship.uid) {
          ship.uid = uuid();
        }
      });

      // Replace current object?
      if (state.filter(s => s.uid === squadron.uid).length > 0) {
        const old = state.filter(s => s.uid === squadron.uid)[0];
        state[state.indexOf(old)] = squadron;
        return [...state];
      }

      return [...state, squadron];
    }

    case RENAME_SQUADRON: {
      // FIXME
      const { squadronUid, name } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.name = name;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }

    case COPY_SQUADRON: {
      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }

      const copy = JSON.parse(JSON.stringify(squadron));
      copy.version = '2.0.0';
      copy.uid = uuid();
      copy.createdDatestamp = new Date().getTime();
      if (!copy.pilots) {
        copy.pilots = [];
      }

      copy.pilots.forEach((ship: Ship) => {
        ship.uid = uuid();
      });

      return [...state, copy];
    }

    case TOGGLE_FAVOURITE_SQUADRON: {
      // FIXME
      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }

      squadron.favourite = !squadron.favourite;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case TOGGLE_FORMAT_SQUADRON: {
      // FIXME
      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }

      switch (squadron.format) {
        case 'Extended':
          squadron.format = 'Hyperspace';
          break;
        case 'Hyperspace':
          squadron.format = 'Epic';
          break;
        case 'Epic':
          squadron.format = 'Extended';
          break;
      }

      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }

    case REMOVE_SQUADRON: {
      const { squadronUid } = action;
      return [...state.filter(s => s.uid !== squadronUid)];
    }

    case ADD_SHIP: {
      if (!action.squadronUid || !action.shipXws || !action.pilotXws) {
        return state;
      }

      const { squadronUid, pilotXws, shipXws, upgrades } = action;

      return state.map(squadron => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = { ...squadron };
        const pilot: PilotXWS = {
          uid: uuid(),
          name: pilotXws,
          ship: shipXws,
          upgrades: upgrades || {},
        };

        edit.pilots = [...edit.pilots, pilot];
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case COPY_SHIP: {
      const { squadronUid, unitUid } = action;
      if (!squadronUid || !unitUid) {
        return state;
      }

      return state.map(squadron => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = { ...squadron };
        const pilot = Object.assign(
          {},
          squadron.pilots.find(p => p.uid === unitUid)
        );
        pilot.uid = uuid();

        edit.pilots = [...edit.pilots, pilot];
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case REMOVE_SHIP: {
      const { squadronUid, unitUid } = action;
      if (!squadronUid || !unitUid) {
        return state;
      }

      return state.map(squadron => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = { ...squadron };
        edit.pilots = edit.pilots.filter(p => p.uid !== unitUid);
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpMinor(edit.version || '2.0.0');

        return edit;
      });
    }

    case CHANGE_PILOT: {
      // FIXME
      if (!action.squadronUid || !action.shipUid || !action.pilotXws) {
        return state;
      }

      const { squadronUid, shipUid } = action;
      const squadron = state.find(s => s.uid === squadronUid);
      if (!squadron) {
        return state;
      }
      const pilot = squadron.pilots.find(p => p.uid === shipUid);
      if (!pilot) {
        return state;
      }

      const newPilot = loadPilot(
        { ...pilot, name: action.pilotXws },
        squadron.faction
      );
      console.log('1', pilot.upgrades);

      allSlots.forEach(slot => {
        const key = keyFromSlot(slot);
        // Ta bort de som inte finns alls på nya skeppet
        const count = newPilot.pilot.slots.filter(s => s === slot).length;
        if (pilot.upgrades && pilot.upgrades[key]) {
          // Ta bort tills det är samma count
          while (pilot.upgrades[key].length > count) {
            pilot.upgrades[key].pop();
          }
          if (count === 0) {
            delete pilot.upgrades[key];
          }
        }
      });
      console.log('2', pilot.upgrades);

      pilot.name = action.pilotXws;

      if (!action.hasForce && pilot.upgrades) {
        delete pilot.upgrades.forcepower;
      }
      if (!action.hasTalent && pilot.upgrades) {
        delete pilot.upgrades.talent;
      }

      squadron.pilots = [...squadron.pilots];
      squadron.cost = pointsForSquadron(squadron);
      squadron.version = bumpMinor(squadron.version || '2.0.0');

      return [...state];
    }

    case SET_UPGRADE: {
      if (!action.squadronUid || !action.unitUid) {
        return state;
      }

      const { squadronUid, unitUid, upgrade, slot, slotIndex } = action;

      return state.map(squadron => {
        if (squadron.uid !== squadronUid) {
          return squadron;
        }

        const edit = JSON.parse(JSON.stringify(squadron));
        const slotKey = keyFromSlot(slot);

        const unit = edit.pilots.filter((p: PilotXWS) => p.uid === unitUid)[0];
        if (!unit || !slotKey) {
          return squadron;
        }
        if (!unit.upgrades) {
          unit.upgrades = {};
        }

        if (!upgrade) {
          if (unit.upgrades[slotKey]) {
            unit.upgrades[slotKey].splice(slotIndex, 1);

            if (unit.upgrades[slotKey].length === 0) {
              delete unit.upgrades[slotKey];
            }
          }
        } else {
          if (!unit.upgrades[slotKey]) {
            unit.upgrades[slotKey] = [];
          }
          if (slotIndex > unit.upgrades[slotKey].length) {
            unit.upgrades[slotKey].push(upgrade.xws);
          } else {
            unit.upgrades[slotKey][slotIndex] = upgrade.xws;
          }
        }
        console.log({ edit, slotIndex });
        edit.cost = pointsForSquadron(edit);
        edit.version = bumpPatch(edit.version || '2.0.0');

        return edit;
      });
    }

    case INCREASE_SQUADRON_WINS: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.wins = (squadron.wins || 0) + 1;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case DECREASE_SQUADRON_WINS: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.wins = Math.max((squadron.wins || 0) - 1, 0);
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case INCREASE_SQUADRON_LOSSES: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.losses = (squadron.losses || 0) + 1;
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }
    case DECREASE_SQUADRON_LOSSES: {
      if (!action.squadronUid) {
        return state;
      }

      const { squadronUid } = action;
      const squadron = state.filter(s => s.uid === squadronUid)[0];
      if (!squadron) {
        return state;
      }
      squadron.losses = Math.max((squadron.losses || 0) - 1, 0);
      squadron.version = bumpPatch(squadron.version || '2.0.0');

      return [...state];
    }

    default:
      break;
  }
  return state;
}
