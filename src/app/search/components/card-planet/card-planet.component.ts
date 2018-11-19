import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Planet } from '../../../core/models/planet.model';

@Component({
  selector: 'sw-card-planet',
  template: `
    <li class="flex flex-row">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold">{{ planet.name }}</h2>
          <div class="text-grey-dark leading-3x">
            <ng-container *ngIf="planet.population !== 'unknown'">
              Population: {{ planet.population | number }} /
            </ng-container>
            Climate: {{ planet.climate }} /
            Terrain: {{ planet.terrain }} /
            Surface is {{ planet.surface_water }}% water
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ planet.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardPlanetComponent {
  offset = 100;
  defaultImage = 'assets/planet-5x.jpg';
  images = `assets/planet-90x.jpg 90w,
            assets/planet-180x.jpg 180w`;

  @Input()
  planet: Planet;
}
