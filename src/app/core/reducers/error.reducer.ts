import { ErrorActions, ErrorActionTypes } from '../actions/error.actions';

export interface ErrorState {
  error: boolean;
}

export const errorInitialState: ErrorState = {
  error: false,
};

export function errorReducer(state = errorInitialState, action: ErrorActions): ErrorState {
  switch (action.type) {
    case ErrorActionTypes.Error:
      return {
        error: true,
      };
    default:
      return state;
  }
}

