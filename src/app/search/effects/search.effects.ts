import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CheckResults, SearchActionTypes } from '../actions/search.actions';
import { exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { Action, select, Store } from '@ngrx/store';
import { selectSearchFilter, selectSearchTerm } from '../selectors/search.selectors';
import { from, Observable } from 'rxjs';
import { Filter } from '../models/filter.model';
import { SearchState } from '../reducers/search.reducer';
import { InitializeFilms } from '../../core/actions/film.actions';
import { InitializePeople } from '../../core/actions/person.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  check$ = this._actions$.pipe(
    ofType<CheckResults>(SearchActionTypes.CheckResults),
    withLatestFrom(this._store.pipe(select(selectSearchFilter)), this._store.pipe(select(selectSearchTerm))),
    exhaustMap(([ action, filter, term ]): Observable<Action> => from(initActions(filter, term)))
  );

  @Effect()
  search$ = this._actions$.pipe(
    ofType(SearchActionTypes.SetSearch),
    map(() => new CheckResults()),
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<SearchState>,
  ) {}
}

const initActions = (filter: Filter, term: string): Action[] => {

  return [].concat(
    filter.films ? [ new InitializeFilms({ term }) ] : [],
    filter.people ? [ new InitializePeople({ term }) ] : [],
  );
};
