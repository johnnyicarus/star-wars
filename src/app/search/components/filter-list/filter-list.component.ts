import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-filter-list',
  template: `
    <p>
      filter-list works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
