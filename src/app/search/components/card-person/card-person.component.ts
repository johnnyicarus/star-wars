import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../../core/models/person.model';

@Component({
  selector: 'sw-card-person',
  template: `
    <li class="flex flex-row">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold"> {{ person.name }} </h2>
          <div class="text-grey-dark leading-3x">
            Born: {{ person.birth_year }} / Height: {{ person.height | swHeight }} / Weight: {{ person.mass }}kg /
            Skin: {{ person.skin_color }} / Hair: {{ person.hair_color }} / Eyes: {{ person.eye_color }} / Gender: {{ person.gender }}
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ person.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPersonComponent {
  offset = 100;
  defaultImage = 'assets/person-5x.jpg';
  images = `assets/person-90x.jpg 90w,
            assets/person-180x.jpg 180w`;

  @Input()
  person: Person;
}
