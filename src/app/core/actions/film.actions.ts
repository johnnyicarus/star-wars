import { Action } from '@ngrx/store';
import { Film } from '../models/film.model';
import { Search } from '../../search/models/search.model';

export enum FilmActionTypes {
  InitializeFilms = '[Film] Initialize film',
  AddFilm = '[Film] Add film',
  AddFilms = '[Film] Add films',
}

export class InitializeFilms implements Action {
  readonly type = FilmActionTypes.InitializeFilms;

  constructor(public payload: { term: string }) {}
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
  | InitializeFilms
  | AddFilm
  | AddFilms;
