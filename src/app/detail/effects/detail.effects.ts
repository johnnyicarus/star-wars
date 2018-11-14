import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { DetailActionTypes } from '../actions/detail.actions';

@Injectable()
export class DetailEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(DetailActionTypes.LoadDetails));

  constructor(private actions$: Actions) {}
}
