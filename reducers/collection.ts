// @flow
import {
  Action,
  DECREASE_ADDITIONAL_PILOT,
  DECREASE_ADDITIONAL_SHIP,
  DECREASE_ADDITIONAL_UPGRADE,
  DECREASE_SOURCE_EXPANSION,
  INCREASE_ADDITIONAL_PILOT,
  INCREASE_ADDITIONAL_SHIP,
  INCREASE_ADDITIONAL_UPGRADE,
  INCREASE_SOURCE_EXPANSION,
  SET_COLLECTION,
} from '../actions/collection';

export type CollectionState = {
  timestamp: number;
  expansions: { [s: string]: number };
  pilots: { [s: string]: number };
  ships: { [s: string]: number };
  upgrades: { [s: string]: number };
};

const initialState = {
  timestamp: 0,
  expansions: {},
  pilots: {},
  ships: {},
  upgrades: {},
};

export default function onAction(
  state: CollectionState = initialState,
  action: Action
) {
  switch (action.type) {
    case SET_COLLECTION: {
      return {
        ...action.collection,
        timestamp: action.timestamp,
      };
    }

    case INCREASE_SOURCE_EXPANSION: {
      const count = state.expansions[action.xws] || 0;
      const expansions = Object.assign({}, state.expansions);
      expansions[action.xws] = count + 1;

      return {
        ...state,
        expansions,
      };
    }

    case DECREASE_SOURCE_EXPANSION: {
      const count = state.expansions[action.xws] || 0;
      const expansions = Object.assign({}, state.expansions);

      expansions[action.xws] = Math.max(count - 1, 0); // Expansions cannot go below 0
      if (expansions[action.xws] === 0) {
        delete expansions[action.xws];
      }

      return {
        ...state,
        expansions,
      };
    }

    case INCREASE_ADDITIONAL_PILOT: {
      if (!state.pilots) {
        state.pilots = {};
      }

      const count = state.pilots[action.xws] || 0;
      const pilots = Object.assign({}, state.pilots);
      pilots[action.xws] = count + 1;

      return {
        ...state,
        pilots,
      };
    }

    case DECREASE_ADDITIONAL_PILOT: {
      if (!state.pilots) {
        state.pilots = {};
      }
      const count = state.pilots[action.xws] || 0;
      const pilots = Object.assign({}, state.pilots);

      pilots[action.xws] = Math.max(count - 1, 0); // Pilots cannot go below 0
      if (pilots[action.xws] === 0) {
        delete pilots[action.xws];
      }

      return {
        ...state,
        pilots,
      };
    }

    case INCREASE_ADDITIONAL_SHIP: {
      const count = state.ships[action.xws] || 0;
      const ships = Object.assign({}, state.ships);
      ships[action.xws] = count + 1;

      return {
        ...state,
        ships,
      };
    }

    case DECREASE_ADDITIONAL_SHIP: {
      const count = state.ships[action.xws] || 0;
      const ships = Object.assign({}, state.ships);

      ships[action.xws] = Math.max(count - 1, 0); // Ships cannot go below 0
      if (ships[action.xws] === 0) {
        delete ships[action.xws];
      }

      return {
        ...state,
        ships,
      };
    }

    case INCREASE_ADDITIONAL_UPGRADE: {
      const count = state.upgrades[action.xws] || 0;
      const upgrades = Object.assign({}, state.upgrades);
      upgrades[action.xws] = count + 1;

      return {
        ...state,
        upgrades,
      };
    }

    case DECREASE_ADDITIONAL_UPGRADE: {
      const count = state.upgrades[action.xws] || 0;
      const upgrades = Object.assign({}, state.upgrades);

      upgrades[action.xws] = Math.max(count - 1, 0); // Upgrades cannot go below 0
      if (upgrades[action.xws] === 0) {
        delete upgrades[action.xws];
      }

      return {
        ...state,
        upgrades,
      };
    }

    default:
      return state;
  }
}
