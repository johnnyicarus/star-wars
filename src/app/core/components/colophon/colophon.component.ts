import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sw-colophon',
  template: `
    <p class="float-right text-white px-2x mb-2x leading-none text-shadow">Made with ❤︎ by Marin Aeschbach.</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColophonComponent {}
