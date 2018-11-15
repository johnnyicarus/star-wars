import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Entity } from '../../../core/models/entity.model';

@Component({
  selector: 'sw-result-card',
  template: `
    <a [routerLink]="['detail', card.type, card.id]"
       class="no-underline">
      <sw-film-card *ngIf="card.type === 'films'"
                    [film]="card"></sw-film-card>
      <sw-person-card *ngIf="card.type === 'people'"
                      [person]="card"></sw-person-card>
    </a>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCardComponent {

  @Input()
  card: Entity;
}
