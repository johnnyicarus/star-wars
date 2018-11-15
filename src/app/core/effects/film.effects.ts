import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FilmActionTypes } from '../actions/film.actions';

@Injectable()
export class FilmEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(FilmActionTypes.InitializeFilm));

  constructor(private actions$: Actions) {}
}
