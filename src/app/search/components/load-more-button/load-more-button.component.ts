import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sw-load-more-button',
  template: `
    <div class="mt-1x mb-8x px-2x">
      <button (click)="clickEvent.emit()"
              type="button"
              class="shadow-md hover:bg-grey-light transition block w-20x h-6x leading-none text-base mx-auto bg-white rounded p-2x">
        Load more
      </button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreButtonComponent {

  @Output()
  clickEvent: EventEmitter<null> = new EventEmitter();
}
