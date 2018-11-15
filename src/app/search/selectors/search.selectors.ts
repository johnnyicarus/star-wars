import { SearchState } from '../reducers/search.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Filter } from '../models/filter.model';

export const selectSearchState = createFeatureSelector<SearchState>('search');

const getFilter = (state: SearchState): Filter => state.filter;

export const selectSearchFilter = createSelector(
  selectSearchState,
  getFilter,
);
