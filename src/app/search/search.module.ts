import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './reducers/search.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './effects/search.effects';
import { SearchPageComponent } from './containers/search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { ResultsComponent } from './containers/results/results.component';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { LoadMoreComponent } from './components/load-more/load-more.component';
import { FilterComponent } from './containers/filter/filter.component';
import { SearchComponent } from './containers/search/search.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ResultCardComponent } from './components/result-card/result-card.component';

@NgModule({
  declarations: [SearchPageComponent, ResultsComponent, ResultsListComponent, LoadMoreComponent, FilterComponent, SearchComponent, FilterListComponent, SearchBoxComponent, SearchBarComponent, ResultCardComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    StoreModule.forFeature('search', fromSearch.reducer),
    EffectsModule.forFeature([SearchEffects])
  ]
})
export class SearchModule { }
