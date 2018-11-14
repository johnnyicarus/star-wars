import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <sw-nav-bar></sw-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'star-wars';
}
