import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Entity } from '../../../core/models/entity.model';

@Component({
  selector: 'sw-result-card',
  template: `
    <p>
      {{card.id}} | {{card.title}}
      {{ card | json }}
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCardComponent {

  @Input()
  card: Entity;
}
