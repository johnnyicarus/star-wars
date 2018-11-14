import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-detail-page',
  template: `
    <p>
      detail-page works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
