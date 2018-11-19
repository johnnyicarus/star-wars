import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddSpecies, SpecieActionTypes, InitializeSpecies } from '../actions/specie.actions';
import { selectSpecieCount, selectFinalSpecieTotal } from '../selectors/specie.selectors';
import { filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { calculatePage, notAllEntitiesLoaded } from '../utils/count.utils';
import { ApiService } from '../services/api.service';
import { SpecieState } from '../reducers/specie.reducer';
import { mapToPage } from '../utils/entities.utils';

@Injectable()
export class SpecieEffects {

  @Effect()
  initialize$ = this._actions$.pipe(
    ofType(SpecieActionTypes.InitializeSpecies),
    map((action: InitializeSpecies) => action.payload),
    withLatestFrom(this._store.pipe(select(selectFinalSpecieTotal)), this._store.pipe(select(selectSpecieCount))),
    filter(([ payload, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ payload, total, count ]) =>
      this._apiService.getPage('species', payload.term, calculatePage(total, payload.loadMore, count)).pipe(
        map(resource => mapToPage(resource, 'species')),
        map((returner) => new AddSpecies({ results: returner.results, term: payload.term, count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<SpecieState>,
  ) {}
}
