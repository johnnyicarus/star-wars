import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ NotFoundPageComponent, NavBarComponent ],
  exports: [ NotFoundPageComponent, NavBarComponent ],
})
export class CoreModule { }
