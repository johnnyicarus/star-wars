import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PersonActionTypes } from '../actions/person.actions';

@Injectable()
export class PersonEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(PersonActionTypes.InitializePeople));

  constructor(private actions$: Actions) {}
}
