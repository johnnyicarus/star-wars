import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface AuthState {
  user: string;
  error: string;
  pending: boolean;
}

export const authInitialState: AuthState = {
  user: '',
  error: '',
  pending: false,
};

export function authReducer(state = authInitialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        error: null,
        pending: true,
      };
    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    case AuthActionTypes.LoginSuccess:
    case AuthActionTypes.LoginSuccessNoRedirect:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        pending: false,
      };
    default:
      return state;
  }
}
