import { SearchState } from '../reducers/search.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filter } from '../models/filter.model';
import get from 'lodash.get';

export const selectSearchState = createFeatureSelector<SearchState>('search');

const getFilter = (state: SearchState): Filter => state.filter;

export const selectSearchFilter = createSelector(
  selectSearchState,
  getFilter,
);

const getTerm = (state: SearchState): string => get(state, 'term', '');

export const selectSearchTerm = createSelector(
  selectSearchState,
  getTerm,
);
