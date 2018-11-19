import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorState } from '../reducers/error.reducer';

export const selectErrorState = createFeatureSelector<ErrorState>('error');

export const getErrorBoolean = (state: ErrorState): boolean => state.error;

export const selectErrorBoolean = createSelector(selectErrorState, getErrorBoolean);
