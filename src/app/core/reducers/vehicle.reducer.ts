import { VehicleActions, VehicleActionTypes } from '../actions/vehicle.actions';
import { addSearchIfNew, setAddManyState } from '../utils/state.utils';
import { Vehicle } from '../models/vehicle.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResults } from '../../search/models/search.model';

export interface VehicleState extends EntityState<Vehicle> {
  count: number;
  searches: {
    [term: string]: SearchResults;
  };
}

export const vehicleAdapter: EntityAdapter<Vehicle> = createEntityAdapter<Vehicle>();

export const vehicleInitialState: VehicleState = vehicleAdapter.getInitialState({
  count: 0,
  searches: {}
});

export function vehicleReducer(
  state = vehicleInitialState,
  action: VehicleActions
): VehicleState {
  switch (action.type) {
    case VehicleActionTypes.AddVehicle:
      return vehicleAdapter.addOne(action.payload.entity, state);
    case VehicleActionTypes.AddVehicles:
      return vehicleAdapter.addMany(<Vehicle[]>action.payload.results, <VehicleState>setAddManyState(state, action.payload));
    case VehicleActionTypes.InitializeVehicles:
      return <VehicleState>addSearchIfNew(action.payload.term, state);
    default:
      return state;
  }
}
