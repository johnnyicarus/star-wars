import { createFeatureSelector, createSelector } from '@ngrx/store';
import { vehicleAdapter, VehicleState } from '../reducers/vehicle.reducer';
import { getCount, getTotal, isLargerThan } from '../utils/count.utils';
import { selectSearchTerm } from '../../search/selectors/search.selectors';

export const selectVehicleState = createFeatureSelector<VehicleState>('vehicle');

export const {
  selectIds,
  selectEntities: selectVehicleEntities,
  selectAll,
  selectTotal,
} = vehicleAdapter.getSelectors(selectVehicleState);

export const selectVehicleCount = createSelector(
  selectVehicleState,
  selectSearchTerm,
  getCount,
);

export const selectFinalVehicleTotal = createSelector(
  selectVehicleState,
  selectSearchTerm,
  getTotal,
);

export const showVehicleLoadMore = createSelector(
  selectVehicleCount,
  selectFinalVehicleTotal,
  isLargerThan,
);

