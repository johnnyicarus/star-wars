import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { Credentials } from '../models/credentials.model';
import { AuthActionTypes, Login, LoginFailure, LoginSuccess } from '../actions/auth.actions';
import { AuthService } from '../services/auth.service';
import { AuthState } from '../reducers/auth.reducer';
import { Action, select, Store } from '@ngrx/store';
import { selectUser } from '../selectors/auth.selectors';
import { getCookie } from '../../utils/cookie.utils';


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
    withLatestFrom(this._store.pipe(select(selectUser))),
    tap(([action, user]: [Action, string]) => {
      // Provide very simple login caching
      // Unsafe
      const cacheDate = parseInt(getCookie('lastCached'), 10);
      if (!cacheDate) {
        document.cookie = `lastCached=${new Date().getTime()}`;
        document.cookie = `userName=${user}`;
      }
      this._router.navigate(['/search']);
    })
  );

  @Effect({ dispatch: false })
  loginSuccessNoRedirect$ = this._actions$.pipe(
    ofType(AuthActionTypes.LoginSuccessNoRedirect),
    withLatestFrom(this._store.pipe(select(selectUser))),
    tap(([action, user]: [Action, string]) => {
      // Provide very simple login caching
      // Unsafe
      const cacheDate = parseInt(getCookie('lastCached'), 10);
      if (!cacheDate) {
        document.cookie = `lastCached=${new Date().getTime()}`;
        document.cookie = `userName=${user}`;
      }
      // this._router.navigate(['']);
    })
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
    private _store: Store<AuthState>,
  ) {}
}
