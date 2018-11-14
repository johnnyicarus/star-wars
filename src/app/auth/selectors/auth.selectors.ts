import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

const getUser = (state: AuthState): string => state.user;

const selectUser = createSelector(
  selectAuthState,
  getUser,
);

const hasUser = (user: string): boolean => !!user;

export const selectLoggedIn = createSelector(selectUser, hasUser);

const getPending = (state: AuthState): boolean => state.pending;

export const selectLoginPending = createSelector(
  selectAuthState,
  getPending,
);

const getError = (state: AuthState): string => state.error;

export const selectLoginError = createSelector(
  selectAuthState,
  getError,
);
