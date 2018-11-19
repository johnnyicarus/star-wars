import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FilmEffects } from './core/effects/film.effects';
import { PersonEffects } from './core/effects/person.effects';
import { PlanetEffects } from './core/effects/planet.effects';
import { StarshipEffects } from './core/effects/starship.effects';
import { SpecieEffects } from './core/effects/specie.effects';
import { VehicleEffects } from './core/effects/vehicle.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './utils/serializer.utils';
import { NotFoundPageComponent } from './core/containers/not-found-page/not-found-page.component';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { ColophonComponent } from './core/components/colophon/colophon.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NavBarComponent,
    ColophonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      FilmEffects,
      PersonEffects,
      PlanetEffects,
      StarshipEffects,
      SpecieEffects,
      VehicleEffects
    ]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: CustomSerializer,
    }),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
