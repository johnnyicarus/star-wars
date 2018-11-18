import { createFeatureSelector, createSelector } from '@ngrx/store';
import { starshipAdapter, StarshipState } from '../reducers/starship.reducer';
import { getCount, getTotal, isLargerThan } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectStarshipState = createFeatureSelector<StarshipState>('starship');

export const {
  selectIds,
  selectEntities: selectStarshipEntities,
  selectAll,
  selectTotal,
} = starshipAdapter.getSelectors(selectStarshipState);

export const selectStarshipCount = createSelector(
  selectStarshipState,
  selectSearchTerm,
  getCount,
);

export const selectFinalStarshipTotal = createSelector(
  selectStarshipState,
  selectSearchTerm,
  getTotal,
);

export const showStarshipLoadMore = createSelector(
  selectStarshipCount,
  selectFinalStarshipTotal,
  isLargerThan,
);

