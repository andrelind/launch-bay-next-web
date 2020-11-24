export type UserLogin = {
  id?: string;
  name?: string;
  provider?: Provider;
  email?: string;
  jwt?: string | null;
};

export const USER_DID_LOGIN = "USER_DID_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export type Provider = "Facebook" | "Google";

export type UserDidLoginAction = {
  type: "USER_DID_LOGIN";
  payload: UserLogin;
};

export type UserLogoutAction = {
  type: "USER_LOGOUT";
};

export type Action = UserDidLoginAction | UserLogoutAction;

export const userDidLogin = (action: UserLogin): UserDidLoginAction => ({
  type: USER_DID_LOGIN,
  payload: action,
});

export const userLogout = (): UserLogoutAction => ({
  type: USER_LOGOUT,
});

export default {
  userDidLogin,
  userLogout,
};
