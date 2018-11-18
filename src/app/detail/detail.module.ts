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
import { DetailPlanetComponent } from './components/detail-planet/detail-planet.component';
import { DetailSpecieComponent } from './components/detail-specie/detail-specie.component';
import { DetailStarshipComponent } from './components/detail-starship/detail-starship.component';
import { DetailVehicleComponent } from './components/detail-vehicle/detail-vehicle.component';

@NgModule({
  declarations: [DetailPageComponent, DetailFilmComponent, DetailPersonComponent, DetailPlanetComponent, DetailSpecieComponent, DetailStarshipComponent, DetailVehicleComponent],
  imports: [
    SharedModule,
    DetailRoutingModule,
    StoreModule.forFeature('detail', detailReducer),
    EffectsModule.forFeature([ DetailEffects ])
  ]
})
export class DetailModule { }
