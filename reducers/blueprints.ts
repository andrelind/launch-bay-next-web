// @flow
import UUID from 'uuid/v4';

import { slotKeys } from '../helpers/enums';
import { BluePrint, SlotKey } from '../types';
import {
  Action,
  ADD_SYNCED_BLUEPRINT,
  REMOVE_BLUEPRINT,
  REMOVE_SYNCED_BLUEPRINT,
  SAVE_BLUEPRINT,
} from '../actions/blueprints';

export type State = BluePrint[];

const initialState: BluePrint[] = [];

export default function onAction(state: State = initialState, action: Action) {
  // console.log(action);
  switch (action.type) {
    case SAVE_BLUEPRINT: {
      const { ship } = action;
      if (!ship || !ship.pilot) {
        return;
      }
      const upgrades: { [key in SlotKey]?: string[] } = {};
      if (ship.upgrades) {
        slotKeys.forEach(key => {
          const shipUpgrades = ship.upgrades && ship.upgrades[key];
          if (!shipUpgrades) {
            return;
          }

          upgrades[key] = shipUpgrades.map(u => u.xws);
        });
      }

      const unitCopy = Object.assign(
        {},
        {
          uid: UUID(),
          nick: action.name || 'No name',
          faction: action.faction,
          name: action.ship.pilot.xws,
          ship: action.ship.xws,
          upgrades,
        },
      );

      return [...state, unitCopy];
    }

    case REMOVE_BLUEPRINT: {
      const { uid } = action;
      if (!uid) {
        return;
      }

      return [...state.filter(u => u.uid !== uid)];
    }

    case ADD_SYNCED_BLUEPRINT: {
      return [...state, action.blueprint];
    }

    case REMOVE_SYNCED_BLUEPRINT: {
      const { uid } = action;
      if (!uid) {
        return;
      }
      return [...state.filter(u => u.uid !== uid)];
    }

    default:
  }
  return state;
}
