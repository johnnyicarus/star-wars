import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-not-found-page',
  template: `
    <div class="h-screen flex items-stretch justify-center">
      <div class="bg-white text-black leading-3x rounded w-4/5 max-w-36x self-center p-2x">
        We are very sorry, but this page could not be found.
        Please navigate to our home page by using the link in the top left.
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
