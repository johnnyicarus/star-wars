import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Starship } from '../../../core/models/starship.model';
import { referenceLookUp } from '../../utils/look-up.utils';
import { select, Store } from '@ngrx/store';
import { selectDetailFilms } from '../../selectors/detail.selectors';
import { DetailState } from '../../reducers/detail.reducer';
import { config } from '../../../app.config';

@Component({
  selector: 'sw-detail-starship',
  template: `
    <section class="c-detail">
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             src="assets/starship.jpg">
        <h1 class="text-4xl leading-4x pt-5x">{{ starship.name }}</h1>
      </div>
      <div class="c-detail__container">
        <p>Born: <span class="font-semibold">{{ starship.birth_year }}</span></p>
        <div class="flex">
          <p>Homeworld:</p>
          <ul class="list-reset flex">
            <li *ngFor="let world of (films$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'films', getId(starship.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'films', getId(starship.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <div class="flex">
          <p>Species:</p>
          <ul class="list-reset flex">
            <li *ngFor="let world of (films$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'films', getId(starship.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
            </li>
          </ul>
        </div>
        <p>Skin: <span class="font-semibold">{{ starship.skin_color }}</span></p>
        <p>Hair: <span class="font-semibold">{{ starship.hair_color }}</span></p>
        <p>Eyes: <span class="font-semibold">{{ starship.eye_color }}</span></p>
        <p>Gender: <span class="font-semibold">{{ starship.gender }}</span></p>
        <p>Height: <span class="font-semibold">{{ starship.height | swHeight }}</span></p>
        <p>Mass: <span class="font-semibold">{{ starship.mass }}kg</span></p>
      </div>
      <div class="c-detail__container">
        <span>Spaceships</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'films', getId(starship.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
        <span>Vehicles</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'films', getId(starship.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right">
        <p>Entry created: {{ starship.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ starship.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailStarshipComponent {

  private _starship: Starship;

  get starship(): Starship {
    return this._starship;
  }

  @Input()
  set starship(value: Starship) {
    referenceLookUp(value.films, 'films', this._store);
    this._starship = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
