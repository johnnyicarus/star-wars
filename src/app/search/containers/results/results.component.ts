import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../../../core/models/entity.model';
import { select, Store } from '@ngrx/store';
import { SearchState } from '../../reducers/search.reducer';
import { CheckResults } from '../../actions/search.actions';
import { selectEntitiesForDisplay } from '../../../core/selectors/entities.selectors';

@Component({
  selector: 'sw-results',
  template: `
    <ul class="list-reset w-full flex flex-col pt-25x sm:pt-19x md:pt-13x">
      <sw-result-card *ngFor="let result of (results$ | async)"
                      [card]="result"></sw-result-card>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit {

  results$: Observable<Entity[]> = this._store.pipe(select(selectEntitiesForDisplay));

  constructor(
    private _store: Store<SearchState>,
  ) {}

  ngOnInit() {
    this._store.dispatch(new CheckResults());
  }
}
