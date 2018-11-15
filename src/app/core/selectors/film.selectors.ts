import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filmAdapter, FilmState } from '../reducers/film.reducer';
import { getCount, getTotal, isLargerThan } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectFilmState = createFeatureSelector<FilmState>('film');

export const {
  selectIds,
  selectEntities: selectFilmEntities,
  selectAll,
  selectTotal,
} = filmAdapter.getSelectors(selectFilmState);

export const selectFilmCount = createSelector(
  selectFilmState,
  selectSearchTerm,
  getCount,
);

export const selectFinalFilmTotal = createSelector(
  selectFilmState,
  selectSearchTerm,
  getTotal,
);

export const showFilmLoadMore = createSelector(
  selectFilmCount,
  selectFinalFilmTotal,
  isLargerThan,
);

