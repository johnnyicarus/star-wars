import { Component, OnInit } from '@angular/core';
import { getCookie } from './utils/cookie.utils';
import { Observable } from 'rxjs';
import { AuthState } from './auth/reducers/auth.reducer';
import { select, Store } from '@ngrx/store';
import { selectUser } from './auth/selectors/auth.selectors';
import { LoginSuccess } from './auth/actions/auth.actions';

@Component({
  selector: 'sw-root',
  template: `
    <sw-nav-bar [user]="user$ | async"></sw-nav-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  user$: Observable<string> = this._store.pipe(select(selectUser));

  constructor(
    private _store: Store<AuthState>,
  ) {}

  ngOnInit() {
    // Provide very simple login state caching
    // This is just for demonstration purposes
    // It is unsafe and can be very easily mocked
    const cacheDate = parseInt(getCookie('lastCached'), 10);

    if (!!cacheDate && (Date.now() < cacheDate + (60 * 60 * 24 * 14))) {
      const user = getCookie('userName');
      this._store.dispatch(new LoginSuccess({ user }));
    }
  }
}
