import { createFeatureSelector, createSelector } from '@ngrx/store';
import { specieAdapter, SpecieState } from '../reducers/specie.reducer';
import { getCount, getTotal, isLargerThan } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectSpecieState = createFeatureSelector<SpecieState>('specie');

export const {
  selectIds,
  selectEntities: selectSpecieEntities,
  selectAll,
  selectTotal,
} = specieAdapter.getSelectors(selectSpecieState);

export const selectSpecieCount = createSelector(
  selectSpecieState,
  selectSearchTerm,
  getCount,
);

export const selectFinalSpecieTotal = createSelector(
  selectSpecieState,
  selectSearchTerm,
  getTotal,
);

export const showSpecieLoadMore = createSelector(
  selectSpecieCount,
  selectFinalSpecieTotal,
  isLargerThan,
);

