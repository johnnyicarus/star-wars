import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filmAdapter, FilmState } from '../reducers/film.reducer';
import { getCount } from '../utils/count.utils';

export const selectFilmState = createFeatureSelector<FilmState>('film');

export const {
  selectIds,
  selectEntities,
  selectAll: SelectAllFilms,
  selectTotal: selectFilmTotal,
} = filmAdapter.getSelectors(selectFilmState);

export const selectFilmCount = createSelector(
  selectFilmState,
  getCount,
);
