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
import { InitializePlanets } from '../../core/actions/planet.actions';
import { InitializeSpecies } from '../../core/actions/specie.actions';
import { InitializeStarships } from '../../core/actions/starship.actions';
import { InitializeVehicles } from '../../core/actions/vehicle.actions';

@Injectable()
export class SearchEffects {

  @Effect()
  check$ = this._actions$.pipe(
    ofType<CheckResults>(SearchActionTypes.CheckResults),
    map((action: CheckResults): boolean => action.payload.loadMore),
    withLatestFrom(this._store.pipe(select(selectSearchFilter)), this._store.pipe(select(selectSearchTerm))),
    exhaustMap(([ loadMore, filter, term ]): Observable<Action> => from(initActions(filter, term, loadMore)))
  );

  @Effect()
  search$ = this._actions$.pipe(
    ofType(SearchActionTypes.SetSearch, SearchActionTypes.LoadMore),
    map((action: Action): Action => new CheckResults({ loadMore: action.type === SearchActionTypes.LoadMore })),
  );

  constructor(
    private _actions$: Actions,
    private _store: Store<SearchState>,
  ) {}
}

const initActions = (filter: Filter, term: string, loadMore: boolean): Action[] => {

  return [].concat(
    filter.films ? [ new InitializeFilms({ term, loadMore }) ] : [],
    filter.people ? [ new InitializePeople({ term, loadMore }) ] : [],
    filter.planets ? [ new InitializePlanets({ term, loadMore }) ] : [],
    filter.species ? [ new InitializeSpecies({ term, loadMore }) ] : [],
    filter.starships ? [ new InitializeStarships({ term, loadMore }) ] : [],
    filter.vehicles ? [ new InitializeVehicles({ term, loadMore }) ] : [],
  );
};
