import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Planet } from '../../../core/models/planet.model';
import { select, Store } from '@ngrx/store';
import { DetailState } from '../../reducers/detail.reducer';
import { referenceLookUp } from '../../utils/look-up.utils';
import { selectDetailFilms, selectDetailPeople } from '../../selectors/detail.selectors';
import { config } from '../../../app.config';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'sw-detail-planet',
  template: `
    <section class="c-detail"
             [@fadeEnterLeave]>
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <h1 class="text-4xl leading-4x pt-5x">{{ planet.name }}</h1>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let title of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(planet.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{title}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <span>Residents</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (residents$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'people', getId(planet.residents, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{name}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <p *ngIf="planet.population !== 'unknown'">Population: <span class="font-semibold">{{ planet.population | number }}</span></p>
        <p *ngIf="planet.population === 'unknown'">Population: <span class="font-semibold">{{ planet.population }}</span></p>
        <p>Climate: <span class="font-semibold">{{ planet.climate }}</span></p>
        <p>Terrain: <span class="font-semibold">{{ planet.terrain }}</span></p>
        <p>Surface is <span class="font-semibold">{{ planet.surface_water }}%</span> water</p>
        <p>Diameter: <span class="font-semibold">{{ planet.diameter | number }}km</span></p>
        <p>Rotation period: <span class="font-semibold">{{ planet.rotation_period }}h</span></p>
        <p>Orbital period: <span class="font-semibold">{{ planet.orbital_period }} days</span></p>
      </div>
      <div class="c-detail__container text-right border-none">
        <p>Entry created: {{ planet.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ planet.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class DetailPlanetComponent {
  offset = 100;
  defaultImage = 'assets/planet-5x.jpg';
  images = `assets/planet-90x.jpg 90w,
            assets/planet-180x.jpg 180w`;

  private _planet: Planet;

  get planet(): Planet {
    return this._planet;
  }

  @Input()
  set planet(value: Planet) {
    referenceLookUp(value.films, 'films', this._store);
    referenceLookUp(value.residents, 'people', this._store);
    this._planet = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  residents$ = this._store.pipe(select(selectDetailPeople, 'residents'));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
