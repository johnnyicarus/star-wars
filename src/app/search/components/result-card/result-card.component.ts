import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Entity } from '../../../core/models/entity.model';
import { fadeEnterLeave } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'sw-result-card',
  template: `
    <a [routerLink]="['/detail', card.type, card.id]"
       [@fadeEnterLeave]
       class="block no-underline my-1x py-2x px-2x bg-white rounded shadow-md hover:bg-grey-light transition max-w-2xl mx-auto">
      <sw-card-film *ngIf="card.type === 'films'"
                    [film]="card"></sw-card-film>
      <sw-card-person *ngIf="card.type === 'people'"
                      [person]="card"></sw-card-person>
      <sw-card-planet *ngIf="card.type === 'planets'"
                      [planet]="card"></sw-card-planet>
      <sw-card-specie *ngIf="card.type == 'species'"
                      [specie]="card"></sw-card-specie>
      <sw-card-starship *ngIf="card.type === 'starships'"
                        [starship]="card"></sw-card-starship>
      <sw-card-vehicle *ngIf="card.type === 'vehicles'"
                       [vehicle]="card"></sw-card-vehicle>
    </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeEnterLeave,
  ],
})
export class ResultCardComponent {

  @Input()
  card: Entity;
}
