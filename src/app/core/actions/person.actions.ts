import { Action } from '@ngrx/store';
import { Search } from '../../search/models/search.model';
import { Person } from '../models/person.model';

export enum PersonActionTypes {
  InitializePeople = '[Person] Initialize people',
  AddPerson = '[Person] Add person',
  AddPeople = '[Person] Add peoples',
}

export class InitializePeople implements Action {
  readonly type = PersonActionTypes.InitializePeople;
}

export class AddPeople implements Action {
  readonly type = PersonActionTypes.AddPeople;

  constructor(public payload: Search) {}
}

export class AddPerson implements Action {
  readonly type = PersonActionTypes.AddPerson;

  constructor(public payload: { person: Person }) {}
}

export type PersonActions =
  | InitializePeople
  | AddPerson
  | AddPeople;
