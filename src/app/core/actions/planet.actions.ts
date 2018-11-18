import { Action } from '@ngrx/store';
import { Planet } from '../models/planet.model';
import { Search } from '../../search/models/search.model';

export enum PlanetActionTypes {
  InitializePlanets = '[Planet] Initialize planet',
  AddPlanet = '[Planet] Add planet',
  AddPlanets = '[Planet] Add planets',
}

export class InitializePlanets implements Action {
  readonly type = PlanetActionTypes.InitializePlanets;

  constructor(public payload: { term: string, loadMore: boolean }) {}
}

export class AddPlanet implements Action {
  readonly type = PlanetActionTypes.AddPlanet;

  constructor(public payload: { entity: Planet }) {}
}

export class AddPlanets implements Action {
  readonly type = PlanetActionTypes.AddPlanets;

  constructor(public payload: Search) {}
}

export type PlanetActions =
  | InitializePlanets
  | AddPlanet
  | AddPlanets;
