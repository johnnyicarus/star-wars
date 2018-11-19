import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../../core/models/person.model';
import { select, Store } from '@ngrx/store';
import { DetailState } from '../../reducers/detail.reducer';
import {
  selectDetailFilms,
  selectDetailPlanet,
  selectDetailSpecies,
  selectDetailStarships,
  selectDetailVehicles,
} from '../../selectors/detail.selectors';
import { config } from '../../../app.config';
import { referenceLookUp } from '../../utils/look-up.utils';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'sw-detail-person',
  template: `
    <section class="c-detail"
             [@fadeEnterLeave]>
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <h1 class="text-4xl leading-4x pt-5x">{{ person.name }}</h1>
      </div>
      <div class="c-detail__container">
        <p>Born: <span class="font-semibold">{{ person.birth_year }}</span></p>
        <div class="flex">
          <p>Homeworld:</p>
          <ul class="list-reset flex">
            <li *ngFor="let name of (homeworld$ | async); let i=index"
                [@fadeEnterLeave]>
              <a [routerLink]="['/', 'detail', 'planets', getId(person.homeworld, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(person.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <div class="flex">
          <span>Species:</span>
          <ul class="list-reset flex">
            <li *ngFor="let name of (species$ | async); let i=index"
                [@fadeEnterLeave]>
              <a [routerLink]="['/', 'detail', 'species', getId(person.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ name }}</a>
            </li>
          </ul>
        </div>
        <p>Skin: <span class="font-semibold">{{ person.skin_color }}</span></p>
        <p>Hair: <span class="font-semibold">{{ person.hair_color }}</span></p>
        <p>Eyes: <span class="font-semibold">{{ person.eye_color }}</span></p>
        <p>Gender: <span class="font-semibold">{{ person.gender }}</span></p>
        <p>Height: <span class="font-semibold">{{ person.height | swHeight }}</span></p>
        <p>Mass: <span class="font-semibold">{{ person.mass }}kg</span></p>
      </div>
      <div class="c-detail__container">
        <span>Spaceships</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (starships$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'starships', getId(person.starships, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <span>Vehicles</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (vehicles$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'vehicles', getId(person.vehicles, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right border-none">
        <p>Entry created: {{ person.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ person.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class DetailPersonComponent {
  offset = 100;
  defaultImage = 'assets/person-5x.jpg';
  images = `assets/person-90x.jpg 90w,
            assets/person-180x.jpg 180w`;

  private _person: Person;

  get person(): Person {
    return this._person;
  }

  @Input()
  set person(value: Person) {
    referenceLookUp([ value.homeworld ], 'planets', this._store);
    referenceLookUp(value.films, 'films', this._store);
    referenceLookUp(value.species, 'species', this._store);
    referenceLookUp(value.starships, 'starships', this._store);
    referenceLookUp(value.vehicles, 'vehicles', this._store);
    this._person = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  homeworld$ = this._store.pipe(select(selectDetailPlanet, 'homeworld'));

  species$: Observable<string[]> = this._store.pipe(select(selectDetailSpecies, 'species'));

  starships$: Observable<string[]> = this._store.pipe(select(selectDetailStarships, 'starships'));

  vehicles$: Observable<string[]> = this._store.pipe(select(selectDetailVehicles, 'vehicles'));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
