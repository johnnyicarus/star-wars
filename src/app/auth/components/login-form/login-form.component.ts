import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Credentials } from '../../models/credentials.model';
import { FormControl, FormGroup } from '@angular/forms';
import styleConfig from '../../../../../tailwind.js';

@Component({
  selector: 'sw-login-form',
  template: `
    <div class="h-screen flex items-stretch justify-center">
      <div class="w-4/5 max-w-36x self-center">
        <form [formGroup]="form"
              (ngSubmit)="emitSubmit()"
              autocomplete="off"
              class="bg-white shadow-md rounded overflow-hidden">
          <div class="">
            <input formControlName="username"
                   required=""
                   placeholder="Username"
                   name="username"
                   id="username"
                   class="appearance-none border-b border-solid border-grey-light w-full h-8x p-3x leading-none focus:bg-grey-lightest focus:outline-none">
            <label for="username" class="hidden">Username</label>
          </div>
          <div>
            <input formControlName="password"
                   required
                   type="password"
                   placeholder="Password"
                   name="password"
                   id="password"
                   [class.has-error]="error"
                   class="appearance-none border-b border-solid border-grey-light w-full h-8x p-3x leading-none focus:bg-grey-lightest focus:outline-none">
            <label for="password" class="hidden">Password</label>
          </div>
          <div>
            <p *ngIf="error"
               class="h-8x p-3x bg-red border-b border-solid border-red-dark border-t">
              {{ error }}
            </p>
          </div>
          <div>
            <button type="submit"
                    [disabled]="!form.valid"
                    class="w-full h-8x p-3x hover:bg-grey-lightest focus:outline-none">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [
    `button:disabled {
      background: #ffffff; /* TODO Use tailwind config */
      cursor: not-allowed;
    }`,
    `.has-error {
      border: none;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {

  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input()
  error: string;

  @Output()
  submitEvent: EventEmitter<Credentials> = new EventEmitter<Credentials>() ;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  emitSubmit() {
    if (this.form.valid) {
      this.submitEvent.emit(this.form.value);
    }
  }
}
