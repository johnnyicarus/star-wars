import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Planet } from '../../../core/models/planet.model';

@Component({
  selector: 'sw-card-planet',
  template: `
    <li class="flex flex-row py-2x my-1x px-2x mx-2x bg-white rounded shadow-md">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             src="assets/planet.jpg">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold"> {{ planet.name }} </h2>
          <div class="text-grey-dark leading-3x">
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ planet.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPlanetComponent {

  @Input()
  planet: Planet;
}
