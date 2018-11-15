import { Entity, ResourceState } from '../models/entity.model';
import { Search, SearchResults } from '../../search/models/search.model';
import { Dictionary } from '@ngrx/entity';

export function setAddManySearchState(state: ResourceState, search: Search): ResourceState {

  return {
    ...state,
    searches: {
      ...state.searches,
      [search.term]: {
        term: search.term,
        count: search.count,
        results: state.searches[search.term].results.concat(search.results.map((entity: Entity): string => entity.id)),
      },
    },
  };
}

export function setAddManyNoSearchState(state: ResourceState, count: number): ResourceState {
  return {
    ...state,
    count,
  };
}

export const setAddManyState = (state: ResourceState, search: Search): ResourceState => search.term
  ? setAddManySearchState(state, search)
  : setAddManyNoSearchState(state, search.count);


export const addSearchIfNew = (term: string, state: ResourceState): ResourceState => {

  return !!term
    ? { ...state, searches: setSearches(state.searches, term) }
    : state;
};

export function setSearches(searches: Dictionary<SearchResults>, term: string): Dictionary<SearchResults> {

  if (searches[term]) {
    return searches;
  }

  return {
    ...searches,
    [term]: {
      term: term,
      count: 0,
      results: [],
    }
  };
}
