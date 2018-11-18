import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Entity } from '../../../core/models/entity.model';

@Component({
  selector: 'sw-result-card',
  template: `
    <a [routerLink]="['/detail', card.type, card.id]"
       class="no-underline">
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCardComponent {

  @Input()
  card: Entity;
}
