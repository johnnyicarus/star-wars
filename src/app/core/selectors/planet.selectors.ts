import { createFeatureSelector, createSelector } from '@ngrx/store';
import { planetAdapter, PlanetState } from '../reducers/planet.reducer';
import { getCount, getTotal, isLargerThan } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectPlanetState = createFeatureSelector<PlanetState>('planet');

export const {
  selectIds,
  selectEntities: selectPlanetEntities,
  selectAll,
  selectTotal,
} = planetAdapter.getSelectors(selectPlanetState);

export const selectPlanetCount = createSelector(
  selectPlanetState,
  selectSearchTerm,
  getCount,
);

export const selectFinalPlanetTotal = createSelector(
  selectPlanetState,
  selectSearchTerm,
  getTotal,
);

export const showPlanetLoadMore = createSelector(
  selectPlanetCount,
  selectFinalPlanetTotal,
  isLargerThan,
);

