import { Action } from '@ngrx/store';
import { Search } from '../../search/models/search.model';
import { Starship } from '../models/starship.model';

export enum StarshipActionTypes {
  InitializeStarships = '[Starship] Initialize starship',
  AddStarship = '[Starship] Add starship',
  AddStarships = '[Starship] Add starships',
}

export class InitializeStarships implements Action {
  readonly type = StarshipActionTypes.InitializeStarships;

  constructor(public payload: { term: string, loadMore: boolean }) {}
}

export class AddStarship implements Action {
  readonly type = StarshipActionTypes.AddStarship;

  constructor(public payload: { entity: Starship }) {}
}

export class AddStarships implements Action {
  readonly type = StarshipActionTypes.AddStarships;

  constructor(public payload: Search) {}
}

export type StarshipActions =
  | InitializeStarships
  | AddStarship
  | AddStarships;
