import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sw-search-page',
  template: `
    <sw-search-bar></sw-search-bar>
    <sw-results></sw-results>
    <sw-load-more></sw-load-more>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent {}
