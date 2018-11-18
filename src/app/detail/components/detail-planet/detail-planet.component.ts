import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Planet } from '../../../core/models/planet.model';
import { select, Store } from '@ngrx/store';
import { DetailState } from '../../reducers/detail.reducer';
import { referenceLookUp } from '../../utils/look-up.utils';
import { selectDetailFilms } from '../../selectors/detail.selectors';
import { config } from '../../../app.config';

@Component({
  selector: 'sw-detail-planet',
  template: `
    <section class="c-detail">
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             src="assets/planet.jpg">
        <h1 class="text-4xl leading-4x pt-5x">{{ planet.name }}</h1>
      </div>
      <div class="c-detail__container">
        <p>Born: <span class="font-semibold">{{ planet.birth_year }}</span></p>
        <div class="flex">
          <p>Homeworld:</p>
          <ul class="list-reset flex">
            <li *ngFor="let world of (films$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'films', getId(planet.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'films', getId(planet.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <div class="flex">
          <p>Species:</p>
          <ul class="list-reset flex">
            <li *ngFor="let world of (films$ | async); let i=index">
              <a [routerLink]="['/', 'detail', 'films', getId(planet.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
            </li>
          </ul>
        </div>
        <p>Skin: <span class="font-semibold">{{ planet.skin_color }}</span></p>
        <p>Hair: <span class="font-semibold">{{ planet.hair_color }}</span></p>
        <p>Eyes: <span class="font-semibold">{{ planet.eye_color }}</span></p>
        <p>Gender: <span class="font-semibold">{{ planet.gender }}</span></p>
        <p>Height: <span class="font-semibold">{{ planet.height | swHeight }}</span></p>
        <p>Mass: <span class="font-semibold">{{ planet.mass }}kg</span></p>
      </div>
      <div class="c-detail__container">
        <span>Spaceships</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'films', getId(planet.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
        <span>Vehicles</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index">
            <a [routerLink]="['/', 'detail', 'films', getId(planet.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right">
        <p>Entry created: {{ planet.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ planet.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPlanetComponent {

  private _planet: Planet;

  get planet(): Planet {
    return this._planet;
  }

  @Input()
  set planet(value: Planet) {
    referenceLookUp(value.films, 'films', this._store);
    this._planet = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
