import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddStarships, StarshipActionTypes, InitializeStarships } from '../actions/starship.actions';
import { selectStarshipCount, selectFinalStarshipTotal } from '../selectors/starship.selectors';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { calculatePage, notAllEntitiesLoaded } from '../utils/count.utils';
import { ApiService } from '../services/api.service';
import { StarshipState } from '../reducers/starship.reducer';
import { mapToPage } from '../utils/entities.utils';

@Injectable()
export class StarshipEffects {

  @Effect()
  initialize$ = this._actions$.pipe(
    ofType(StarshipActionTypes.InitializeStarships),
    map((action: InitializeStarships) => action.payload),
    withLatestFrom(this._store.pipe(select(selectFinalStarshipTotal)), this._store.pipe(select(selectStarshipCount))),
    filter(([ payload, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ payload, total, count ]) =>
      this._apiService.getPage('starships', payload.term, calculatePage(total, payload.loadMore, count)).pipe(
        map(resource => mapToPage(resource, 'starships')),
        map((returner) => new AddStarships({ results: returner.results, term: payload.term, count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<StarshipState>,
  ) {}
}
