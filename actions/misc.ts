export const TOGGLE_SHOW_UNAVAILABLE: 'TOGGLE_SHOW_UNAVAILABLE' =
  'TOGGLE_SHOW_UNAVAILABLE';
export const TOGGLE_DEFAULT_FORMAT: 'TOGGLE_DEFAULT_FORMAT' =
  'TOGGLE_DEFAULT_FORMAT';
export const SET_VERSION: 'SET_VERSION' = 'SET_VERSION';

export const TOGGLE_MINIMIZE: 'TOGGLE_MINIMIZE' = 'TOGGLE_MINIMIZE';

export type ToggleShowUnavailable = {
  type: typeof TOGGLE_SHOW_UNAVAILABLE;
};

export type ToggleDefaultFormat = {
  type: typeof TOGGLE_DEFAULT_FORMAT;
};

export type SetVersionAction = {
  type: typeof SET_VERSION;
  version: string;
};

export type ToggleMinimizeAction = {
  type: typeof TOGGLE_MINIMIZE;
  key: string;
};

export type Action =
  | ToggleShowUnavailable
  | ToggleDefaultFormat
  | SetVersionAction
  | ToggleMinimizeAction;

export const toggleShowUnavailable = () => ({
  type: TOGGLE_SHOW_UNAVAILABLE
});

export const toggleDefaultFormat = () => ({
  type: TOGGLE_DEFAULT_FORMAT
});

export const setVersion = (version: string) => ({
  type: SET_VERSION,
  version
});

export const toggleMinimize = (key: string) => ({ type: TOGGLE_MINIMIZE, key });

export default { toggleShowUnavailable, setVersion, toggleMinimize };
