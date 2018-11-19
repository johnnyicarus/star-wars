import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  Error = '[Error] Database connection failed',
}

export class ErrorAction implements Action {
  readonly type = ErrorActionTypes.Error;
}

export type ErrorActions =
  | ErrorAction;

