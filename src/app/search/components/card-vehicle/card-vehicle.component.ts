import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Vehicle } from '../../../core/models/vehicle.model';

@Component({
  selector: 'sw-card-vehicle',
  template: `
    <li class="flex flex-row">
      <div class="flex flex-col md:flex-row">
        <img class="block w-9x h-9x overflow-hidden rounded bg-center bg-cover items-center flex-none mr-2x mb-2x md:mb-0"
             [defaultImage]="defaultImage"
             [lazyLoad]="images"
             [useSrcset]="true"
             [offset]="offset">
        <div>
          <h2 class="text-black text-base leading-3x font-semibold"> {{ vehicle.name }} </h2>
          <div class="text-grey-dark leading-3x">
            {{ vehicle.model }} /
            Class: {{ vehicle.vehicle_class }} /
            Manufacturer: {{ vehicle.manufacturer }}
          </div>
          <div class="leading-3x text-grey-darkest"> Last edited: {{ vehicle.edited | date:'longDate' }}</div>
        </div>
      </div>
    </li>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardVehicleComponent {
  offset = 100;
  defaultImage = 'assets/vehicle-5x.jpg';
  images = `assets/vehicle-90x.jpg 90w,
            assets/vehicle-180x.jpg 180w`;
  
  @Input()
  vehicle: Vehicle;
}
