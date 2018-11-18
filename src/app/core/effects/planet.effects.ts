import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddPlanets, PlanetActionTypes, InitializePlanets } from '../actions/planet.actions';
import { selectPlanetCount, selectFinalPlanetTotal } from '../selectors/planet.selectors';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { calculatePage, notAllEntitiesLoaded } from '../utils/count.utils';
import { ApiService } from '../services/api.service';
import { PlanetState } from '../reducers/planet.reducer';
import { mapToPage } from '../utils/entities.utils';

@Injectable()
export class PlanetEffects {

  @Effect()
  initialize$ = this._actions$.pipe(
    ofType(PlanetActionTypes.InitializePlanets),
    map((action: InitializePlanets) => action.payload),
    withLatestFrom(this._store.pipe(select(selectFinalPlanetTotal)), this._store.pipe(select(selectPlanetCount))),
    filter(([ payload, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ payload, total ]) =>
      this._apiService.getPage('planets', payload.term, calculatePage(total, payload.loadMore)).pipe(
        map(resource => mapToPage(resource, 'planets')),
        map((returner) => new AddPlanets({ results: returner.results, term: payload.term, count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<PlanetState>,
  ) {}
}
