import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-results-list',
  template: `
    <p>
      results-list works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
