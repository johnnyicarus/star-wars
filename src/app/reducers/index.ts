import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { filmReducer, FilmState } from '../core/reducers/film.reducer';
import { personReducer, PersonState } from '../core/reducers/person.reducer';

export interface State {
  film: FilmState;
  person: PersonState;
}

export const reducers: ActionReducerMap<State> = {
  film: filmReducer,
  person: personReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
