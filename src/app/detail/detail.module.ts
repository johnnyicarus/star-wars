import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { detailReducer } from './reducers/detail.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from './effects/detail.effects';
import { DetailPageComponent } from './containers/detail-page/detail-page.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { DetailPersonComponent } from './components/detail-person/detail-person.component';

@NgModule({
  declarations: [DetailPageComponent, DetailFilmComponent, DetailPersonComponent],
  imports: [
    SharedModule,
    DetailRoutingModule,
    StoreModule.forFeature('detail', detailReducer),
    EffectsModule.forFeature([ DetailEffects ])
  ]
})
export class DetailModule { }
