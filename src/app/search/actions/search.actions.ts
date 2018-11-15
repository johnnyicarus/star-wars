import { Action } from '@ngrx/store';
import { Filter } from '../models/filter.model';

export enum SearchActionTypes {
  SetFilter = '[Search] Set filter',
  CheckResults = '[Search] Check results',
}

export class SetFilter implements Action {
  readonly type = SearchActionTypes.SetFilter;

  constructor(public payload: { filter: Filter } ) {}
}

export class CheckResults implements Action {
  readonly type = SearchActionTypes.CheckResults;
}

export type SearchActions =
  | SetFilter
  | CheckResults;
