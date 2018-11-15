import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-search-bar',
  template: `
    <div class="lg:h-6x w-full shadow-md bg-white lg:flex lg:items-stretch border-t border-solid border-grey-light">
      <div class="w-full h-6x flex-grow">
        <sw-search></sw-search>
      </div>
      <div class="w-full flex-no-grow lg:py-2x sm:h-6x px-2x">
        <sw-filter></sw-filter>
      </div>
    </div>
  `,
  styles: [
    `:host {
      position: fixed;
      top: 2.9375rem; /* 1px overlap with nav bar to hide small hole */
      left: 0;
      width: 100%;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
