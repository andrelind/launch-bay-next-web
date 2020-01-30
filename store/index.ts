import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';

import sagas from '../sagas';
import { AppState, rootReducer } from './state';

export const initializeStore = (initialState: AppState): Store<AppState> => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'production'
      ? applyMiddleware(thunkMiddleware, sagaMiddleware)
      : composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
  );

  sagas.forEach(sagaMiddleware.run);

  return store;
};
