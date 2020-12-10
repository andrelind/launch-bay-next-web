import { Action } from "lbn-core/dist/actions";
import { AppState, rootReducer } from "lbn-core/dist/state";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import thunkMiddleware from "redux-thunk";

export interface SagaStore extends Store<AppState, Action> {
  sagaTask: Task;
}

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
    return rootReducer(nextState, action);
  } else {
    return rootReducer(state, action);
  }
};

const sagaMiddleware = createSagaMiddleware();

const initStore = () => {
  const store = createStore(
    reducer,
    bindMiddleware([thunkMiddleware, sagaMiddleware])
  );
  // (store as SagaStore).sagaTask = sagaMiddleware.run(sagas.default);

  return store;
};

export const wrapper = createWrapper(initStore);
