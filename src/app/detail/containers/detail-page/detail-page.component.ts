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
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'sw-detail-page',
  template: `
    <div class="mb-8x">
      <sw-detail-film *ngIf="(detail$ | async).type === 'films'"
                      [film]="detail$ | async"></sw-detail-film>
      <sw-detail-person *ngIf="(detail$ | async).type === 'people'"
                        [person]="detail$ | async"></sw-detail-person>
      <sw-detail-planet *ngIf="(detail$ | async).type === 'planets'"
                        [planet]="detail$ | async"></sw-detail-planet>
      <sw-detail-specie *ngIf="(detail$ | async).type === 'species'"
                        [specie]="detail$ | async"></sw-detail-specie>
      <sw-detail-starship *ngIf="(detail$ | async).type === 'starships'"
                          [starship]="detail$ | async"></sw-detail-starship>
      <sw-detail-vehicle *ngIf="(detail$ | async).type === 'vehicles'"
                         [vehicle]="detail$ | async"></sw-detail-vehicle>
    </div>
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
      untilDestroyed(this),
      map((params: Detail) => new LoadDetail({ detail: params })),
    ).subscribe(_store);
  }

  ngOnDestroy() {}
}
