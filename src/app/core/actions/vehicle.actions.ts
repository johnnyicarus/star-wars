import { Action } from '@ngrx/store';
import { Search } from '../../search/models/search.model';
import { Vehicle } from '../models/vehicle.model';

export enum VehicleActionTypes {
  InitializeVehicles = '[Vehicle] Initialize vehicle',
  AddVehicle = '[Vehicle] Add vehicle',
  AddVehicles = '[Vehicle] Add vehicles',
}

export class InitializeVehicles implements Action {
  readonly type = VehicleActionTypes.InitializeVehicles;

  constructor(public payload: { term: string, loadMore: boolean }) {}
}

export class AddVehicle implements Action {
  readonly type = VehicleActionTypes.AddVehicle;

  constructor(public payload: { entity: Vehicle }) {}
}

export class AddVehicles implements Action {
  readonly type = VehicleActionTypes.AddVehicles;

  constructor(public payload: Search) {}
}

export type VehicleActions =
  | InitializeVehicles
  | AddVehicle
  | AddVehicles;
