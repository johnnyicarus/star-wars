import { Action } from '@ngrx/store';

export enum DetailActionTypes {
  LoadDetails = '[Detail] Load Details'
}

export class LoadDetails implements Action {
  readonly type = DetailActionTypes.LoadDetails;
}

export type DetailActions = LoadDetails;
