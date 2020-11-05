import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import thunkMiddleware from "redux-thunk";
import sagas from "../sagas";
import { rootReducer } from "./state";

export interface SagaStore extends Store {
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
    return nextState;
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
  // (store as SagaStore).sagaTask = sagas.forEach(sagaMiddleware.run);
  sagas.forEach(sagaMiddleware.run);
  return store;
};

export const wrapper = createWrapper(initStore);

// import { applyMiddleware, createStore, Store } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from "redux-saga";
// import thunkMiddleware from "redux-thunk";
// import sagas from "../sagas";
// import { AppState, rootReducer } from "./state";

// export const initializeStore = (initialState: AppState): Store<AppState> => {
//   const sagaMiddleware = createSagaMiddleware();

//   const store = createStore(
//     rootReducer,
//     initialState,
//     process.env.NODE_ENV === "production"
//       ? applyMiddleware(thunkMiddleware, sagaMiddleware)
//       : composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
//   );

//   sagas.forEach(sagaMiddleware.run);

//   return store;
// };
