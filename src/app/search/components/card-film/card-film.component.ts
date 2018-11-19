import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Film } from '../../../core/models/film.model';

@Component({
  selector: 'sw-card-film',
  template: `
    <li class="flex flex-row">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold"> {{ film.title }} </h2>
          <div class="text-grey-dark leading-3x">
            Release date: {{ film.release_date | date:'longDate' }} / Director: {{ film.director }} / Producer: {{ film.producer }}
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ film.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [
    `img {
      filter: blur(2px);
    }`,
    `.ng-lazyloaded {
      filter: none;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardFilmComponent {
  offset = 100;
  defaultImage = 'assets/film1-5x.jpg';
  images = `assets/film1-90x.jpg 90w,
            assets/film1-180x.jpg 180w`;

  @Input()
  film: Film;
}
