import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Starship } from '../../../core/models/starship.model';

@Component({
  selector: 'sw-card-starship',
  template: `
    <li class="flex flex-row">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold"> {{ starship.name }} </h2>
          <div class="text-grey-dark leading-3x">
            {{ starship.model }} /
            Class: {{ starship.starship_class }} /
            Manufacturer: {{ starship.manufacturer }}
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ starship.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardStarshipComponent {
  offset = 100;
  defaultImage = 'assets/starship-5x.jpg';
  images = `assets/starship-90x.jpg 90w,
            assets/starship-180x.jpg 180w`;

  @Input()
  starship: Starship;
}
