import { rootReducer } from 'lbn-core/dist/state';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
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

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
