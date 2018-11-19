import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ColophonComponent } from './components/colophon/colophon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ NotFoundPageComponent, NavBarComponent, ColophonComponent ],
  exports: [ NotFoundPageComponent, NavBarComponent, ColophonComponent ],
})
export class CoreModule { }
