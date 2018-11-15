import { Action } from '@ngrx/store';
import { Film } from '../models/film.model';
import { Search } from '../../search/models/search.model';

export enum FilmActionTypes {
  InitializeFilm = '[Film] Initialize film',
  AddFilm = '[Film] Add film',
  AddFilms = '[Film] Add films',
}

export class InitializeFilm implements Action {
  readonly type = FilmActionTypes.InitializeFilm;
}

export class AddFilm implements Action {
  readonly type = FilmActionTypes.AddFilm;

  constructor(public payload: { film: Film }) {}
}

export class AddFilms implements Action {
  readonly type = FilmActionTypes.AddFilms;

  constructor(public payload: Search) {}
}

export type FilmActions =
  | InitializeFilm
  | AddFilm
  | AddFilms;
