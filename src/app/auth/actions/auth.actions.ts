import { Action } from '@ngrx/store';
import { Credentials } from '../models/credentials.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginFailure = '[Auth] Login failure',
  LoginSuccess = '[Auth] Login success',
  LoginSuccessNoRedirect = '[Auth] Login success (no redirect)',
  LoginRedirect = '[Auth] Login redirect',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { credentials: Credentials }) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: string }) {}
}

export class LoginSuccessNoRedirect implements Action {
  readonly type = AuthActionTypes.LoginSuccessNoRedirect;

  constructor(public payload: { user: string }) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: { error: any }) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginSuccessNoRedirect
  | LoginFailure
  | LoginRedirect;
