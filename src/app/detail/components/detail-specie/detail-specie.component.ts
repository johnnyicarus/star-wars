import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Specie } from '../../../core/models/specie.model';
import { DetailState } from '../../reducers/detail.reducer';
import { referenceLookUp } from '../../utils/look-up.utils';
import { selectDetailFilms, selectDetailPeople, selectDetailPlanet } from '../../selectors/detail.selectors';
import { config } from '../../../app.config';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'sw-detail-specie',
  template: `
    <section class="c-detail"
             [@fadeEnterLeave]>
      <div class="c-detail__container flex">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <h1 class="text-4xl leading-4x pt-5x">{{ specie.name }}</h1>
      </div>
      <div class="c-detail__container">
        <div class="flex">
          <p>Homeworld:</p>
          <ul class="list-reset flex flex-wrap">
            <li *ngFor="let name of (homeworld$ | async); let i=index"
                [@fadeEnterLeave]>
              <a [routerLink]="['/', 'detail', 'planets', getId([ specie.homeworld ], i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ name }}</a>
            </li>
          </ul>
        </div>
        <p>Classification: <span class="font-semibold">{{ specie.classification }}</span></p>
        <p>Designation: <span class="font-semibold">{{ specie.designation }}</span></p>
      </div>
      <div class="c-detail__container">
        <span>Members</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let name of (members$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'people', getId(specie.people, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{name}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex flex-wrap">
          <li *ngFor="let title of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(specie.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{title}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <p>Language: <span class="font-semibold">{{ specie.language }}</span></p>
        <p>Average lifespan: <span class="font-semibold">{{ specie.average_lifespan }}</span></p>
        <p>Average height: <span class="font-semibold">{{ specie.average_height | swHeight }}</span></p>
        <p>Skin: <span class="font-semibold">{{ specie.skin_colors }}</span></p>
        <p>Eyes: <span class="font-semibold">{{ specie.eye_colors }}</span></p>
      </div>
      <div class="c-detail__container text-right border-none">
        <p>Entry created: {{ specie.created | date:'longDate' }}</p>
        <p>Entry last updated: {{ specie.edited | date:'longDate' }}</p>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class DetailSpecieComponent {
  offset = 100;
  defaultImage = 'assets/species2-5x.jpg';
  images = `assets/species2-90x.jpg 90w,
            assets/species2-180x.jpg 180w`;

  private _specie: Specie;

  get specie(): Specie {
    return this._specie;
  }

  @Input()
  set specie(value: Specie) {
    // value.homeworld could be null
    if (value.homeworld) {
      referenceLookUp([ value.homeworld ], 'planets', this._store);
    }
    referenceLookUp(value.films, 'films', this._store);
    referenceLookUp(value.people, 'people', this._store);
    this._specie = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  members$ = this._store.pipe(select(selectDetailPeople, 'people'));

  homeworld$ = this._store.pipe(select(selectDetailPlanet, 'homeworld'));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
