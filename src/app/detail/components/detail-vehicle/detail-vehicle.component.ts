import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vehicle } from '../../../core/models/vehicle.model';
import { referenceLookUp } from '../../utils/look-up.utils';
import { select, Store } from '@ngrx/store';
import { selectDetailFilms, selectDetailPeople } from '../../selectors/detail.selectors';
import { config } from '../../../app.config';
import { DetailState } from '../../reducers/detail.reducer';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'sw-detail-vehicle',
  template: `
    <section class="c-detail"
             [@fadeEnterLeave]>
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <h1 class="text-4xl leading-4x pt-5x">{{ vehicle.name }}</h1>
      </div>
      <div class="c-detail__container">
        <p>Official model name: <span class="font-semibold">{{ vehicle.model }}</span></p>
        <p>Class: <span class="font-semibold">{{ vehicle.vehicle_class }}</span></p>
        <p>Manufacturer: <span class="font-semibold">{{ vehicle.manufacturer }}</span></p>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(vehicle.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <p>Crew: <span class="font-semibold">{{ vehicle.crew }}</span></p>
        <p>Passengers: <span class="font-semibold">{{ vehicle.passengers }}</span></p>
        <p>Consumables: <span class="font-semibold">{{ vehicle.consumables }}</span></p>
      </div>
      <div class="c-detail__container">
        <p>Cost: <span class="font-semibold">{{ vehicle.cost_in_credits | number }} credits</span></p>
        <p>Length: <span class="font-semibold">{{ vehicle.length }}m</span></p>
        <p>Maximum speed (in atmosphere): <span class="font-semibold">{{ vehicle.max_atmosphering_speed }}</span></p>
      </div>
      <div class="c-detail__container">
        <span>Pilots</span>
        <ul class="list-reset flex">
          <li *ngFor="let name of (pilots$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(vehicle.pilots, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{ name }}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right">
        <p>Entry created: {{ vehicle.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ vehicle.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class DetailVehicleComponent {
  offset = 100;
  defaultImage = 'assets/vehicle-5x.jpg';
  images = `assets/vehicle-90x.jpg 90w,
            assets/vehicle-180x.jpg 180w`;

  private _vehicle: Vehicle;

  get vehicle(): Vehicle {
    return this._vehicle;
  }

  @Input()
  set vehicle(value: Vehicle) {
    referenceLookUp(value.films, 'films', this._store);
    referenceLookUp(value.pilots, 'people', this._store);
    this._vehicle = value;
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
