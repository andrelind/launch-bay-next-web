import {
  Action,
  CLEAR_FILTERS,
  FilterType,
  SET_FIRST_SORTING,
  SET_SECOND_SORTING,
  SET_SORT_DIRECTION,
  SHOW_FILTER,
  SHOW_SORTING,
  SortDirectionType,
  SortingType,
  TOGGLE_FILTER,
} from '../actions/filter';

export type State = {
  showFilter: boolean;
  showSorting: boolean;
  filters: { [key in FilterType]?: boolean };
  firstSorting: SortingType;
  secondSorting: SortingType;
  direction: SortDirectionType;
};

const initialState = {
  showFilter: false,
  showSorting: false,
  filters: {},
  firstSorting: 'Faction' as SortingType,
  secondSorting: 'Alphabetically' as SortingType,
  direction: 'Ascending' as SortDirectionType,
};

export default function onAction(
  state: State = initialState,
  action: Action,
): State {
  switch (action.type) {
    case SHOW_FILTER: {
      return { ...state, showFilter: action.show };
    }
    case SHOW_SORTING: {
      return { ...state, showSorting: action.show };
    }
    case TOGGLE_FILTER: {
      const newState = { ...state };
      if (newState.filters[action.filter]) {
        delete newState.filters[action.filter];
      } else {
        newState.filters[action.filter] = true;
      }

      return newState;
    }
    case CLEAR_FILTERS: {
      return { ...state, filters: {} };
    }
    case SET_FIRST_SORTING: {
      return { ...state, firstSorting: action.sorting };
    }
    case SET_SECOND_SORTING: {
      return { ...state, secondSorting: action.sorting };
    }
    case SET_SORT_DIRECTION: {
      break;
    }
  }
  return state;
}
