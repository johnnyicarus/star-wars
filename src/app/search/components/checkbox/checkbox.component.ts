import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterChange } from '../../models/filter.model';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'sw-checkbox',
  template: `
    <li class="py-2x pr-2x lg:py-0 lg:pr-0 lg:pl-2x flex-no-grow flex-no-shrink">
      <mat-checkbox [checked]="checked"
                    (change)="emitChange($event)"
                    (name)="label"
                    (id)="label">
        {{ label | titlecase }}
      </mat-checkbox>
    </li>
  `,
  styles: [
    `:host {
      flex-shrink: 0;
      flex-grow: 0;
    }`,
    `mat-checkbox {
      height: 1rem;
      line-height: 1;
      display: block;
      position: relative;
      top: -2px;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  @Input()
  checked: boolean;

  @Input()
  label: string;

  @Output()
  changeEvent: EventEmitter<FilterChange> = new EventEmitter();

  emitChange(event: MatCheckboxChange) {
    this.changeEvent.emit( { name: this.label, value: event.checked } );
  }
}
