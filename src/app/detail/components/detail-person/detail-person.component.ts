import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Person } from '../../../core/models/person.model';
import { select, Store } from '@ngrx/store';
import { DetailState } from '../../reducers/detail.reducer';
import { selectDetailFilms } from '../../selectors/detail.selectors';
import { config } from '../../../app.config';
import { referenceLookUp } from '../../utils/look-up.utils';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

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
            <li *ngFor="let world of (films$ | async); let i=index"
                [@fadeEnterLeave]>
              <a [routerLink]="['/', 'detail', 'films', getId(person.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-detail__container">
        <span>Films</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(person.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container">
        <div class="flex">
          <p>Species:</p>
          <ul class="list-reset flex">
            <li *ngFor="let world of (films$ | async); let i=index"
                [@fadeEnterLeave]>
              <a [routerLink]="['/', 'detail', 'films', getId(person.films, i)]"
                 class="text-grey-dark hover:text-black no-underline pl-1x">{{ world }}</a>
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
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(person.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
        <span>Vehicles</span>
        <ul class="list-reset flex">
          <li *ngFor="let url of (films$ | async); let i=index"
              [@fadeEnterLeave]>
            <a [routerLink]="['/', 'detail', 'films', getId(person.films, i)]"
               class="text-grey-dark hover:text-black no-underline pr-1x">{{url}}</a>
          </li>
        </ul>
      </div>
      <div class="c-detail__container text-right">
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
    referenceLookUp(value.films, 'films', this._store);
    this._person = value;
  }

  films$ = this._store.pipe(select(selectDetailFilms));

  constructor(
    private _store: Store<DetailState>,
  ) {}

  getId(array: string[], i: number): string {

    return array[i].match(config.idRegExp)[1];
  }
}
