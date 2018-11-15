import { Action } from '@ngrx/store';
import { Detail } from '../models/detail.model';

export enum DetailActionTypes {
  LoadDetail = '[Detail] Load detail',
  DetailLookUp = '[Detail] Look up referenced detail',
  DetailInCache = '[Detail] Entity is already in store'
}

export class LoadDetail implements Action {
  readonly type = DetailActionTypes.LoadDetail;

  constructor(public payload: { detail: Detail }) {}
}

export class DetailLookup implements Action {
  readonly type = DetailActionTypes.DetailLookUp;

  constructor(public payload: { detail: Detail }) {}
}

export class DetailInCache implements Action {
  readonly type = DetailActionTypes.DetailInCache;
}

export type DetailActions =
  | LoadDetail
  | DetailLookup
  | DetailInCache;
