import { FilmActions, FilmActionTypes } from '../actions/film.actions';
import { addSearchIfNew, setAddManyState } from '../utils/state.utils';
import { Film } from '../models/film.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { SearchResults } from '../../search/models/search.model';

export interface FilmState extends EntityState<Film> {
  count: number;
  searches: {
    [term: string]: SearchResults;
  };
}

export const filmAdapter: EntityAdapter<Film> = createEntityAdapter<Film>();

export const filmInitialState: FilmState = filmAdapter.getInitialState({
  count: 0,
  searches: {}
});

export function filmReducer(
  state = filmInitialState,
  action: FilmActions
): FilmState {
  switch (action.type) {
    case FilmActionTypes.AddFilm:
      return filmAdapter.addOne(action.payload.entity, state);
    case FilmActionTypes.AddFilms:
      return filmAdapter.addMany(<Film[]>action.payload.results, <FilmState>setAddManyState(state, action.payload));
    case FilmActionTypes.InitializeFilms:
      return <FilmState>addSearchIfNew(action.payload.term, state);
    default:
      return state;
  }
}
