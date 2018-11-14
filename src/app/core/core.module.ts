import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ NotFoundPageComponent, NavBarComponent ],
  exports: [ NotFoundPageComponent, NavBarComponent ],
})
export class CoreModule { }
