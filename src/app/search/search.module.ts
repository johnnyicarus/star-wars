import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature('search', fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule { }
