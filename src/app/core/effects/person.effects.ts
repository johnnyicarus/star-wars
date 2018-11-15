import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddPeople, PersonActionTypes } from '../actions/person.actions';
import { ApiService } from '../services/api.service';
import { select, Store } from '@ngrx/store';
import { FilmState } from '../reducers/film.reducer';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { selectPersonCount, selectPersonTotal } from '../selectors/person.selectors';
import { calculatePage, notAllEntitiesLoaded } from '../utils/count.utils';
import { mapToPage } from '../utils/entities.utils';

@Injectable()
export class PersonEffects {

  @Effect()
  initialize$ = this._actions$.pipe(
    ofType(PersonActionTypes.InitializePeople),
    withLatestFrom(this._store.pipe(select(selectPersonTotal)), this._store.pipe(select(selectPersonCount))),
    filter(([ action, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ action, total ]) =>
      this._apiService.getPage('people', '', calculatePage(total)).pipe(
        map(resource => mapToPage(resource, 'people')),
        map((returner) => new AddPeople({ results: returner.results, term: '', count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<FilmState>,
  ) {}
}
