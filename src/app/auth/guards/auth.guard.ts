import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/internal/operators';
import { LoginRedirect } from '../actions/auth.actions';
import { selectLoggedIn } from '../selectors/auth.selectors';
import { AuthState } from '../reducers/auth.reducer';

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
