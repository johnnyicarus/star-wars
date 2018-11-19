import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightPipe } from './pipes/height.pipe';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    HeightPipe
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule,
  ],
  exports: [
    CommonModule,
    HeightPipe,
    LazyLoadImageModule,
  ]
})
export class SharedModule { }
