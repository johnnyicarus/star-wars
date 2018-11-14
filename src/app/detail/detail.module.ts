import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDetail from './reducers/detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from './effects/detail.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('detail', fromDetail.reducer),
    EffectsModule.forFeature([DetailEffects])
  ]
})
export class DetailModule { }
