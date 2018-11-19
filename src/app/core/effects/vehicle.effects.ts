import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddVehicles, VehicleActionTypes, InitializeVehicles } from '../actions/vehicle.actions';
import { selectVehicleCount, selectFinalVehicleTotal } from '../selectors/vehicle.selectors';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { calculatePage, notAllEntitiesLoaded } from '../utils/count.utils';
import { ApiService } from '../services/api.service';
import { VehicleState } from '../reducers/vehicle.reducer';
import { mapToPage } from '../utils/entities.utils';

@Injectable()
export class VehicleEffects {

  @Effect()
  initialize$ = this._actions$.pipe(
    ofType(VehicleActionTypes.InitializeVehicles),
    map((action: InitializeVehicles) => action.payload),
    withLatestFrom(this._store.pipe(select(selectFinalVehicleTotal)), this._store.pipe(select(selectVehicleCount))),
    filter(([ payload, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ payload, total, count ]) =>
      this._apiService.getPage('vehicles', payload.term, calculatePage(total, payload.loadMore, count)).pipe(
        map(resource => mapToPage(resource, 'vehicles')),
        map((returner) => new AddVehicles({ results: returner.results, term: payload.term, count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<VehicleState>,
  ) {}
}
