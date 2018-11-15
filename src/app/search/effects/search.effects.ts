import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CheckResults, SearchActionTypes } from '../actions/search.actions';
import { exhaustMap, withLatestFrom } from 'rxjs/operators';
import { Action, select, Store } from '@ngrx/store';
import { selectSearchFilter } from '../selectors/search.selectors';
import { from, Observable } from 'rxjs';
import { Filter } from '../models/filter.model';
import { SearchState } from '../reducers/search.reducer';
import { InitializeFilm } from '../../core/actions/film.actions';
import { InitializePeople } from '../../core/actions/person.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  check$ = this._actions$.pipe(
    ofType<CheckResults>(SearchActionTypes.CheckResults),
    withLatestFrom(this._store.pipe(select(selectSearchFilter))),
    exhaustMap(([ action, filter ]): Observable<Action> => from(initActions(filter)))
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<SearchState>,
  ) {}
}

const initActions = (filter: Filter): Action[] => {

  return [].concat(
    filter.films ? [ new InitializeFilm() ] : [],
    filter.people ? [ new InitializePeople() ] : [],
  );
};
