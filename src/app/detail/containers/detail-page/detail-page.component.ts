import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Entity } from '../../../core/models/entity.model';
import { select, Store } from '@ngrx/store';
import { selectCurrentEntity } from '../../selectors/detail.selectors';
import { ActivatedRoute } from '@angular/router';
import { DetailState } from '../../reducers/detail.reducer';
import { map } from 'rxjs/operators';
import { Detail } from '../../models/detail.model';
import { LoadDetail } from '../../actions/detail.actions';

@Component({
  selector: 'sw-detail-page',
  template: `
    <sw-detail-film *ngIf="(detail$ | async).type === 'films'"
                    [film]="detail$ | async"></sw-detail-film>
    <sw-detail-person *ngIf="(detail$ | async).type === 'people'"
                      [person]="detail$ | async"></sw-detail-person>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent implements OnDestroy {

  routes: Subscription;

  detail$: Observable<Entity> = this._store.pipe(select(selectCurrentEntity));

  /**
   * Constructor
   *
   */
  constructor(
    private _route: ActivatedRoute,
    private _store: Store<DetailState>,
  ) {
    this.routes = _route.params.pipe(
      map((params: Detail) => new LoadDetail({ detail: params })),
    ).subscribe(_store);
  }

  ngOnDestroy() {
    this.routes.unsubscribe();
  }
}
