import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Film } from '../../../core/models/film.model';
import { select, Store } from '@ngrx/store';
import { selectDetailCharacters } from '../../selectors/detail.selectors';
import { DetailState } from '../../reducers/detail.reducer';
import { config } from '../../../app.config';
import { referenceLookUp } from '../../utils/look-up.utils';

@Component({
  selector: 'sw-detail-film',
  template: `
    <section class="c-detail">
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             src="assets/film2.jpg">
        <h1 class="text-4xl leading-4x pt-5x">Episode {{ film.episode_id }}: {{ film.title }}</h1>
      </div>
      <div class="c-detail__container">
        <p>{{ film.opening_crawl }}</p>
      </div>
      <div class="c-detail__container">
        <p>Released: <span class="font-semibold">{{ film.release_date | date:'longDate' }}</span></p>
        <p>Directed by: <span class="font-semibold">{{ film.director }}</span></p>
        <p>Produced by: <span class="font-semibold">{{ film.producer }}</span></p>
      </div>
      <div class="c-detail__container">
        <span>Characters</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let url of (characters$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'people', getId(film.characters, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container flex">
          <p>Species:</p>
          <ul class="list-reset flex">
            <li *ngFor="let world of (characters$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'people', getId(film.characters, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
            </li>
          </ul>
      </div>
        <div class="c-detail__container">
          <span>Spaceships</span>
          <ul class="list-reset flex">
            <li *ngFor="let url of (characters$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'people', getId(film.characters, i)]"
                 class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
            </li>
          </ul>
        </div>
        <div class="c-detail__container">
          <span>Vehicles</span>
          <ul class="list-reset flex">
            <li *ngFor="let url of (characters$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'people', getId(film.characters, i)]"
                 class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
            </li>
          </ul>
        </div>
        <div class="c-detail__container text-right">
          <p>Entry created: {{ film.created | date:'longDate' }}</p>
          <p>Entry last updated: {{ film.edited | date:'longDate' }}</p>
        </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailFilmComponent {

  private _film: Film;

  get film(): Film {
    return this._film;
  }

  @Input()
  set film(value: Film) {
    referenceLookUp(value.characters, 'people', this._store);
    this._film = value;
  }

  characters$ = this._store.pipe(select(selectDetailCharacters));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
