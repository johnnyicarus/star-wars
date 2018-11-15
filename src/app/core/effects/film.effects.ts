import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddFilms, FilmActionTypes, InitializeFilms } from '../actions/film.actions';
import { selectFilmCount, selectFinalFilmTotal } from '../selectors/film.selectors';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { calculatePage, notAllEntitiesLoaded } from '../utils/count.utils';
import { ApiService } from '../services/api.service';
import { FilmState } from '../reducers/film.reducer';
import { mapToPage } from '../utils/entities.utils';

@Injectable()
export class FilmEffects {

  @Effect()
  initialize$ = this._actions$.pipe(
    ofType(FilmActionTypes.InitializeFilms),
    map((action: InitializeFilms): string => action.payload.term),
    withLatestFrom(this._store.pipe(select(selectFinalFilmTotal)), this._store.pipe(select(selectFilmCount))),
    filter(([ term, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ term, total ]) =>
      this._apiService.getPage('films', term, calculatePage(total)).pipe(
        map(resource => mapToPage(resource, 'films')),
        map((returner) => new AddFilms({ results: returner.results, term, count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<FilmState>,
  ) {}
}
