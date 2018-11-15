import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightPipe } from './pipes/height.pipe';

@NgModule({
  declarations: [
    HeightPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    HeightPipe,
  ]
})
export class SharedModule { }
