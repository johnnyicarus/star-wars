import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from './auth/reducers/auth.reducer';
import { select, Store } from '@ngrx/store';
import { selectUser } from './auth/selectors/auth.selectors';
import { selectErrorBoolean } from './core/selectors/error.selectors';

@Component({
  selector: 'sw-root',
  template: `
    <sw-nav-bar [user]="user$ | async"></sw-nav-bar>
    <main *ngIf="!(error$ | async)">
      <router-outlet></router-outlet>
    </main>
    <div *ngIf="error$ | async" class="h-screen flex items-stretch justify-center">
      <div class="bg-red text-white rounded w-4/5 max-w-36x self-center p-2x">
        We are very sorry, but an error occurred. Please try reloading the page.
      </div>
    </div>
    <sw-colophon></sw-colophon>
  `,
  styles: []
})
export class AppComponent {

  error$: Observable<boolean> = this._store.pipe(select(selectErrorBoolean));

  user$: Observable<string> = this._store.pipe(select(selectUser));

  constructor(
    private _store: Store<AuthState>,
  ) {}
}
