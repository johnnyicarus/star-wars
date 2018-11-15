import { Component } from '@angular/core';

@Component({
  selector: 'sw-root',
  template: `
    <sw-nav-bar></sw-nav-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {}
