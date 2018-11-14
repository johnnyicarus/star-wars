import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Login } from '../../actions/auth.actions';
import { Credentials } from '../../models/credentials.model';
import { AuthState } from '../../reducers/auth.reducer';
import { select, Store } from '@ngrx/store';
import { selectLoginError, selectLoginPending } from '../../selectors/auth.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-login-page',
  template: `
    <sw-login-form [pending]="pending$ | async"
                   [error]="error$ | async"
                   (submitEvent)="submit($event)"></sw-login-form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {

  pending$: Observable<boolean> = this._store.pipe(select(selectLoginPending));

  error$: Observable<string> = this._store.pipe(select(selectLoginError));

  constructor(
    private _store: Store<AuthState>,
  ) { }

  submit(credentials: Credentials) {
    this._store.dispatch(new Login({ credentials }));
  }
}
