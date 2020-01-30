import { Faction, Format } from '../types';

export const SHOW_FILTER: 'SHOW_FILTER' = 'SHOW_FILTER';
export const SHOW_SORTING: 'SHOW_SORTING' = 'SHOW_SORTING';
export const TOGGLE_FILTER: 'TOGGLE_FILTER' = 'TOGGLE_FILTER';
export const CLEAR_FILTERS: 'CLEAR_FILTERS' = 'CLEAR_FILTERS';
export const SET_FIRST_SORTING: 'SET_FIRST_SORTING' = 'SET_FIRST_SORTING';
export const SET_SECOND_SORTING: 'SET_SECOND_SORTING' = 'SET_SECOND_SORTING';
export const SET_SORT_DIRECTION: 'SET_SORT_DIRECTION' = 'SET_SORT_DIRECTION';

export type FilterType = 'Favourite' | Faction | Format;
export type SortingType =
  | 'Alphabetically'
  | 'Faction'
  | 'Points'
  | 'Wins'
  | 'Created Date'
  | 'Format';
export type SortDirectionType = 'Ascending' | 'Descending';

export type ShowFilterAction = {
  type: typeof SHOW_FILTER;
  show: boolean;
};

export type ShowSortingAction = {
  type: typeof SHOW_SORTING;
  show: boolean;
};

export type ToggleFilterAction = {
  type: typeof TOGGLE_FILTER;
  filter: FilterType;
};

export type ClearFiltersAction = {
  type: typeof CLEAR_FILTERS;
};

export type SetFirstSortingAction = {
  type: typeof SET_FIRST_SORTING;
  sorting: SortingType;
};

export type SetSecondSortingAction = {
  type: typeof SET_SECOND_SORTING;
  sorting: SortingType;
};

export type SetSortDirectionAction = {
  type: typeof SET_SORT_DIRECTION;
  direction: SortDirectionType;
};

export type Action =
  | ShowFilterAction
  | ShowSortingAction
  | ToggleFilterAction
  | ClearFiltersAction
  | SetFirstSortingAction
  | SetSecondSortingAction
  | SetSortDirectionAction;

export const showFilter = (): ShowFilterAction => ({
  type: SHOW_FILTER,
  show: true,
});

export const hideFilter = (): ShowFilterAction => ({
  type: SHOW_FILTER,
  show: false,
});

export const showSorting = (): ShowSortingAction => ({
  type: SHOW_SORTING,
  show: true,
});

export const hideSorting = (): ShowSortingAction => ({
  type: SHOW_SORTING,
  show: false,
});

export const toggleFilter = (filter: FilterType): ToggleFilterAction => ({
  type: TOGGLE_FILTER,
  filter,
});

export const clearFilters = (): ClearFiltersAction => ({
  type: CLEAR_FILTERS,
});

export const setFirstSorting = (
  sorting: SortingType
): SetFirstSortingAction => ({
  type: SET_FIRST_SORTING,
  sorting,
});

export const setSecondSorting = (
  sorting: SortingType
): SetSecondSortingAction => ({
  type: SET_SECOND_SORTING,
  sorting,
});

export default {
  showFilter,
  hideFilter,
  showSorting,
  hideSorting,
  toggleFilter,
  clearFilters,
  setFirstSorting,
  setSecondSorting,
};
