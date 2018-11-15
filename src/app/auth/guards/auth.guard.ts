import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/internal/operators';
import { LoginRedirect } from '../actions/auth.actions';
import { selectLoggedIn } from '../selectors/auth.selectors';
import { AuthState } from '../reducers/auth.reducer';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private _store: Store<AuthState>,
    private _auth: AuthService,
  ) {}

  canActivate(): Observable<boolean> {
    return this._store.pipe(
      select(selectLoggedIn),
      map((authed: boolean): boolean => {

        // TODO Set to true for dx reasons
        return true;

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
