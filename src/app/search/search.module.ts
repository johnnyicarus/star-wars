import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from './reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { ResultsComponent } from './containers/results/results.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { LoadMoreButtonComponent } from './components/load-more-button/load-more-button.component';
import { FilterComponent } from './containers/filter/filter.component';
import { SearchComponent } from './containers/search/search.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material';
import { LoadMoreComponent } from './containers/load-more/load-more.component';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchPageComponent,
    ResultsComponent,
    ResultsListComponent,
    LoadMoreButtonComponent,
    LoadMoreComponent,
    FilterComponent,
    SearchComponent,
    FilterListComponent,
    SearchBoxComponent,
    SearchBarComponent,
    ResultCardComponent,
    CheckboxComponent,
    FilmCardComponent,
    PersonCardComponent
  ],
  imports: [
    SharedModule,
    SearchRoutingModule,
    MatCheckboxModule,
    StoreModule.forFeature('search', searchReducer),
    EffectsModule.forFeature([ SearchEffects ])
  ]
})
export class SearchModule { }
