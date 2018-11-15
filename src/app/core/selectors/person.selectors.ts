import { createFeatureSelector, createSelector } from '@ngrx/store';
import { personAdapter, PersonState } from '../reducers/person.reducer';
import { getCount, getTotal, isLargerThan } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectPersonState = createFeatureSelector<PersonState>('person');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = personAdapter.getSelectors(selectPersonState);

export const selectPersonCount = createSelector(
  selectPersonState,
  selectSearchTerm,
  getCount,
);

export const selectFinalPersonTotal = createSelector(
  selectPersonState,
  selectSearchTerm,
  getTotal,
);

export const showPersonLoadMore = createSelector(
  selectPersonCount,
  selectFinalPersonTotal,
  isLargerThan,
);
