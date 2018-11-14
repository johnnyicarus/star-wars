import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromDetail from './reducers/detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from './effects/detail.effects';
import { DetailPageComponent } from './containers/detail-page/detail-page.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    StoreModule.forFeature('detail', fromDetail.reducer),
    EffectsModule.forFeature([DetailEffects])
  ]
})
export class DetailModule { }
