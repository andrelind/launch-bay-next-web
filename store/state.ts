import { Action, combineReducers, Dispatch } from 'redux';

import { Actions } from '../actions';
import reducers from '../reducers';

export const rootReducer = combineReducers({
  app: reducers,
  // notifications,
});

export type AppState = ReturnType<typeof rootReducer>;

export interface ConnectedReduxProps<A extends Action = Actions> {
  dispatch: Dispatch<A>;
}
