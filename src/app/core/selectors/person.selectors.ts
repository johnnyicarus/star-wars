import { createFeatureSelector, createSelector } from '@ngrx/store';
import { personAdapter, PersonState } from '../reducers/person.reducer';
import { getCount } from '../utils/count.utils';

export const selectPersonState = createFeatureSelector<PersonState>('person');

export const {
  selectIds,
  selectEntities,
  selectAll: selectAllPeople,
  selectTotal: selectPersonTotal,
} = personAdapter.getSelectors(selectPersonState);

export const selectPersonCount = createSelector(
  selectPersonState,
  getCount,
);
