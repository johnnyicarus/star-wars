import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Film } from '../../../core/models/film.model';
import { select, Store } from '@ngrx/store';
import {
  selectDetailPeople,
  selectDetailPlanets,
  selectDetailSpecies,
  selectDetailStarships,
  selectDetailVehicles,
} from '../../selectors/detail.selectors';
import { DetailState } from '../../reducers/detail.reducer';
import { config } from '../../../app.config';
import { referenceLookUp } from '../../utils/look-up.utils';
import { Observable } from 'rxjs';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'sw-detail-film',
  template: `
    <section class="c-detail"
             [@fadeEnterLeave]>
      <div class="c-detail__container md:flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <h1 class="text-4xl leading-4x md:pt-5x">Episode {{ film.episode_id }}: {{ film.title }}</h1>
      </div>
      <div class="c-detail__container">
        <p>{{ film.opening_crawl }}</p>
      </div>
      <div class="c-detail__container">
        <p>Released: <span class="font-semibold">{{ film.release_date | date:'longDate' }}</span></p>
        <p>Directed by: <span class="font-semibold">{{ film.director }}</span></p>
        <p>Produced by: <span class="font-semibold">{{ film.producer }}</span></p>
      </div>
      <div *ngIf="(characters$ | async)?.length > 0"
           class="c-detail__container">
        <span>Characters</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (characters$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'people', getId(film.characters, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div *ngIf="(planets$ | async)?.length > 0"
           class="c-detail__container">
        <p>Planets</p>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (planets$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'planets', getId(film.planets, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div *ngIf="(species$ | async)?.length > 0"
           class="c-detail__container">
        <p>Species</p>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (species$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'species', getId(film.species, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div *ngIf="(starships$ | async)?.length > 0"
           class="c-detail__container">
        <p>Spaceships</p>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (starships$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'starships', getId(film.starships, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div *ngIf="(vehicles$ | async)?.length > 0"
           class="c-detail__container">
        <span>Vehicles</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (vehicles$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'vehicles', getId(film.vehicles, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right border-none">
        <p>Entry created: {{ film.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ film.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class DetailFilmComponent {
  offset = 100;
  defaultImage = 'assets/film1-5x.jpg';
  images = `assets/film1-90x.jpg 90w,
            assets/film1-180x.jpg 180w`;

  private _film: Film;

  get film(): Film {
    return this._film;
  }

  @Input()
  set film(value: Film) {
    referenceLookUp(value.characters, 'people', this._store);
    referenceLookUp(value.planets, 'planets', this._store);
    referenceLookUp(value.species, 'species', this._store);
    referenceLookUp(value.starships, 'starships', this._store);
    referenceLookUp(value.vehicles, 'vehicles', this._store);
    this._film = value;
  }

  characters$: Observable<string[]> = this._store.pipe(select(selectDetailPeople, 'characters'));

  planets$: Observable<string[]> = this._store.pipe(select(selectDetailPlanets, 'planets'));

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
