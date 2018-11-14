import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Credentials } from '../models/credentials.model';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this._actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload.credentials),
    exhaustMap((auth: Credentials) =>
      this._authService.login(auth).pipe(
        map(user => new LoginSuccess({ user })),
        catchError(error => of(new LoginFailure({ error })))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this._actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this._router.navigate(['/']))
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this._actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect),
    tap(() => this._router.navigate(['/login']))
  );

  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _router: Router,
  ) {}
}
