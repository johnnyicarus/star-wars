import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sw-search-page',
  template: `
    <sw-search-bar></sw-search-bar>
    <sw-results></sw-results>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}