import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Starship } from '../../../core/models/starship.model';
import { referenceLookUp } from '../../utils/look-up.utils';
import { select, Store } from '@ngrx/store';
import { selectDetailFilms, selectDetailPeople } from '../../selectors/detail.selectors';
import { DetailState } from '../../reducers/detail.reducer';
import { config } from '../../../app.config';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'sw-detail-starship',
  template: `
    <section class="c-detail"
             [@fadeEnterLeave]>
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <h1 class="text-4xl leading-4x pt-5x">{{ starship.name }}</h1>
      </div>
      <div class="c-detail__container">
        <p>Official model name: <span class="font-semibold">{{ starship.model }}</span></p>
        <p>Class: <span class="font-semibold">{{ starship.starship_class }}</span></p>
        <p>Manufacturer: <span class="font-semibold">{{ starship.manufacturer }}</span></p>
      </div>
      <div *ngIf="(films$ | async)?.length > 0"
           class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let url of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(starship.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <p>Crew: <span class="font-semibold">{{ starship.crew }}</span></p>
        <p>Passengers: <span class="font-semibold">{{ starship.passengers }}</span></p>
        <p>Consumables: <span class="font-semibold">{{ starship.consumables }}</span></p>
      </div>
      <div class="c-detail__container">
        <p>Cost: <span class="font-semibold">{{ starship.cost_in_credits | number }} credits</span></p>
        <p>Length: <span class="font-semibold">{{ starship.length }}m</span></p>
        <p>Maximum speed (in atmosphere): <span class="font-semibold">{{ starship.max_atmosphering_speed }}</span></p>
        <p>Maximum travel distance: <span class="font-semibold">{{ starship.MGLT }} megalights</span></p>
        <p>Hyperdrive rating: <span class="font-semibold">{{ starship.hyperdrive_rating }}</span></p>
      </div>
      <div *ngIf="(pilots$ | async)?.length > 0"
           class="c-detail__container">
        <span>Pilots</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (pilots$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'people', getId(starship.pilots, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right border-none">
        <p>Entry created: {{ starship.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ starship.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class DetailStarshipComponent {
  offset = 100;
  defaultImage = 'assets/starship-5x.jpg';
  images = `assets/starship-90x.jpg 90w,
            assets/starship-180x.jpg 180w`;

  private _starship: Starship;

  get starship(): Starship {
    return this._starship;
  }

  @Input()
  set starship(value: Starship) {
    referenceLookUp(value.films, 'films', this._store);
    referenceLookUp(value.pilots, 'people', this._store);
    this._starship = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  pilots$ = this._store.pipe(select(selectDetailPeople, 'pilots'));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
