import { Action } from '@ngrx/store';
import { Search } from '../../search/models/search.model';
import { Specie } from '../models/specie.model';

export enum SpecieActionTypes {
  InitializeSpecies = '[Specie] Initialize specie',
  AddSpecie = '[Specie] Add specie',
  AddSpecies = '[Specie] Add species',
}

export class InitializeSpecies implements Action {
  readonly type = SpecieActionTypes.InitializeSpecies;

  constructor(public payload: { term: string, loadMore: boolean }) {}
}

export class AddSpecie implements Action {
  readonly type = SpecieActionTypes.AddSpecie;

  constructor(public payload: { entity: Specie }) {}
}

export class AddSpecies implements Action {
  readonly type = SpecieActionTypes.AddSpecies;

  constructor(public payload: Search) {}
}

export type SpecieActions =
  | InitializeSpecies
  | AddSpecie
  | AddSpecies;
