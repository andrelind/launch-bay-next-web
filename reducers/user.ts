import { Action, Provider, USER_DID_LOGIN, USER_LOGOUT } from '../actions/user';

export type UserState = {
  id?: string;
  name?: string;
  provider?: Provider;
  email?: string;
  jwt: string | void;
};

const initialState = {
  id: undefined,
  name: undefined,
  provider: undefined,
  email: undefined,
  jwt: undefined,
};

export default function onAction(
  state: UserState = initialState,
  action: Action
) {
  // console.log(action);
  switch (action.type) {
    case USER_DID_LOGIN: {
      const { payload } = action;
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        provider: payload.provider,
        email: payload.email,
        jwt: payload.jwt,
      };
    }

    case USER_LOGOUT: {
      return { ...state, ...initialState };
    }

    default:
  }
  return state;
}
