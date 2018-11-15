import { Action } from '@ngrx/store';
import { Filter } from '../models/filter.model';

export enum SearchActionTypes {
  SetFilter = '[Search] Set filter',
  SetSearch = '[Search] Set search',
  CheckResults = '[Search] Check results',
}

export class SetFilter implements Action {
  readonly type = SearchActionTypes.SetFilter;

  constructor(public payload: { filter: Filter } ) {}
}

export class SetSearch implements Action {
  readonly type = SearchActionTypes.SetSearch;

  constructor (public payload: { term: string }) {}
}

export class CheckResults implements Action {
  readonly type = SearchActionTypes.CheckResults;
}

export type SearchActions =
  | SetFilter
  | SetSearch
  | CheckResults;
