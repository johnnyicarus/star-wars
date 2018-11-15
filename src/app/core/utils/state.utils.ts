import { Entity, ResourceState } from '../models/entity.model';
import { Search } from '../../search/models/search.model';

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
