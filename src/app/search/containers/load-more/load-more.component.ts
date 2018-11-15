import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchState } from '../../reducers/search.reducer';
import { LoadMore } from '../../actions/search.actions';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectShowLoadMore } from '../../../core/selectors/entities.selectors';

@Component({
  selector: 'sw-load-more',
  template: `
    <sw-load-more-button *ngIf="showLoadMore$ | async"
                         (clickEvent)="loadMore()"></sw-load-more-button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent {

  showLoadMore$: Observable<boolean> = this._store.pipe(select(selectShowLoadMore));

  constructor(
    private _store: Store<SearchState>,
  ) { }

  loadMore() {
    this._store.dispatch(new LoadMore());
  }
}
