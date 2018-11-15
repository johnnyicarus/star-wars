import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DetailActionTypes, LoadDetail } from '../actions/detail.actions';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { selectAllEntities } from '../selectors/detail.selectors';
import { select, Store } from '@ngrx/store';
import { State } from '../../reducers';
import { EMPTY } from 'rxjs';
import { AddFilm } from '../../core/actions/film.actions';
import { AddPerson } from '../../core/actions/person.actions';
import { ApiService } from '../../core/services/api.service';
import { mapToEntity } from '../../utils/entity.utils';
import { GetResult } from '../../core/models/requests.model';
import { Entity } from '../../core/models/entity.model';
import { Film } from '../../core/models/film.model';
import { Person } from '../../core/models/person.model';

@Injectable()
export class DetailEffects {

  @Effect()
  load$ = this.actions$.pipe(
    ofType(DetailActionTypes.LoadDetail, DetailActionTypes.DetailLookUp),
    map((action: LoadDetail) => action.payload.detail),
    withLatestFrom(this._store.pipe(select(selectAllEntities))),
    mergeMap(([ payload, dictionary ]) => {
      const { type, id } = payload;
      console.log(dictionary);

      if (!dictionary[type][id]) {
        console.log('NOT IN STORE');

        return this._api.getEntity(type, id).pipe(
          map((request: GetResult): Entity => mapToEntity(request, type)),
          map(mapToAction),
        );
      } else {
        return EMPTY;
      }
    })
  );

  constructor(
    private actions$: Actions,
    private _api: ApiService,
    private _store: Store<State>,
  ) {}
}

const mapToAction = (entity: Entity) => {

  // TODO why doesn't the discriminated union not work
  switch (entity.type) {
    case 'films':
      return new AddFilm({ film: <Film>entity });
    case 'people':
      return new AddPerson({ person: <Person>entity });
  }
}
