import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AddFilms, FilmActionTypes, InitializeFilm } from '../actions/film.actions';
import { selectFilmCount, selectFilmTotal } from '../selectors/film.selectors';
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
    ofType(FilmActionTypes.InitializeFilm),
    withLatestFrom(this._store.pipe(select(selectFilmTotal)), this._store.pipe(select(selectFilmCount))),
    filter(([ action, total, count ]) => notAllEntitiesLoaded(total, count)),
    mergeMap(([ action, total ]) =>
      this._apiService.getPage('films', '', calculatePage(total)).pipe(
        map(resource => mapToPage(resource, 'films')),
        map((returner) => new AddFilms({ results: returner.results, term: '', count: returner.count })),
      )
    ),
  );

  constructor(
    private _actions$: Actions,
    private _apiService: ApiService,
    private _store: Store<FilmState>,
  ) {}
}
