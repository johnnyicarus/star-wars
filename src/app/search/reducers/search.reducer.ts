import { SearchActions, SearchActionTypes } from '../actions/search.actions';
import { Filter } from '../models/filter.model';

export interface SearchState {
  filter: Filter;
  term: string;
}

export const searchInitialState: SearchState = {
  filter: {
    films: true,
    people: true,
    planets: true,
    species: true,
    starships: true,
    vehicles: true,
  },
  term: '',
};

export function searchReducer(state = searchInitialState, action: SearchActions): SearchState {
  switch (action.type) {
    case SearchActionTypes.SetFilter:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case SearchActionTypes.SetSearch:
      return {
        ...state,
        term: action.payload.term,
      };
    default:
      return state;
  }
}
