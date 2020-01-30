// @flow
import { Format } from '../types';
import { Action, SET_VERSION, TOGGLE_DEFAULT_FORMAT, TOGGLE_MINIMIZE, TOGGLE_SHOW_UNAVAILABLE } from '../actions/misc';

export type State = {
  showUnavailable: boolean;
  version?: string;
  defaultFormat: Format;
  minimized: { [s: string]: boolean };
};

const initialState = {
  showUnavailable: true,
  defaultFormat: 'Extended' as Format,
  minimized: {}
};

export default function onAction(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case TOGGLE_SHOW_UNAVAILABLE:
      return { ...state, showUnavailable: !state.showUnavailable };
    case TOGGLE_DEFAULT_FORMAT: {
      return {
        ...state,
        defaultFormat:
          state.defaultFormat === 'Hyperspace' ? 'Extended' : 'Hyperspace'
      };
    }
    case SET_VERSION:
      return { ...state, version: action.version };

    case TOGGLE_MINIMIZE: {
      const copy = { ...state };
      if (!copy.minimized) {
        copy.minimized = {};
      }
      copy.minimized[action.key] = !copy.minimized[action.key];

      return copy;
    }
  }
  return state;
}
