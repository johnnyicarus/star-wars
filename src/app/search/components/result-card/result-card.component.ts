import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-result-card',
  template: `
    <p>
      result-card works!
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
