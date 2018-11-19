import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/internal/operators';
import { LoginRedirect, LoginSuccessNoRedirect } from '../actions/auth.actions';
import { selectLoggedIn } from '../selectors/auth.selectors';
import { AuthState } from '../reducers/auth.reducer';
import { getCookie } from '../../utils/cookie.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private _store: Store<AuthState>,
  ) {}

  canActivate(): Observable<boolean> {
    return this._store.pipe(
      select(selectLoggedIn),
      map((authed: boolean): boolean => {

        // Provide very simple login state caching
        // This is just for demonstration purposes
        // It is unsafe and can be very easily mocked
        const cacheDate = parseInt(getCookie('lastCached'), 10);

        if (!!cacheDate && (Date.now() < cacheDate + (1000 * 60 * 60 * 24 * 14))) {
          const user = getCookie('userName');
          this._store.dispatch(new LoginSuccessNoRedirect({ user }));
          return true;
        }

        if (!authed) {
          this._store.dispatch(new LoginRedirect());
          return false;
        }

        return true;
      }),
      take(1)
    );
  }
}
