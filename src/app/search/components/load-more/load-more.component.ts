import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-load-more',
  template: `
    <p>
      load-more works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
