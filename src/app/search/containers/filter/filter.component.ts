import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Filter, FilterChange } from '../../models/filter.model';
import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectSearchFilter } from '../../selectors/search.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchState } from '../../reducers/search.reducer';
import { filter, map } from 'rxjs/operators';
import { SetFilter } from '../../actions/search.actions';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'sw-filter',
  template: `
    <ul class="list-reset flex flex-wrap lg:flex-no-wrap justify-center lg:justify-end w-full">
      <sw-checkbox [checked]="(filters$ | async).films"
                   [label]="'films'"
                   (changeEvent)="updateFilter($event)"></sw-checkbox>
      <sw-checkbox [checked]="(filters$ | async).people"
                   [label]="'people'"
                   (changeEvent)="updateFilter($event)"></sw-checkbox>
      <sw-checkbox [checked]="(filters$ | async).planets"
                   [label]="'planets'"
                   (changeEvent)="updateFilter($event)"></sw-checkbox>
      <sw-checkbox [checked]="(filters$ | async).species"
                   [label]="'species'"
                   (changeEvent)="updateFilter($event)"></sw-checkbox>
      <sw-checkbox [checked]="(filters$ | async).starships"
                   [label]="'starships'"
                   (changeEvent)="updateFilter($event)"></sw-checkbox>
      <sw-checkbox [checked]="(filters$ | async).vehicles"
                   [label]="'vehicles'"
                   (changeEvent)="updateFilter($event)"></sw-checkbox>
    </ul>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnDestroy {

  filters$: Observable<Filter> = this._store.pipe(select(selectSearchFilter));

  filterUpdates$: Subscription;

  filterSubject$: Subject<FilterChange> = new Subject<FilterChange>();

  filterMerge$: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _store: Store<SearchState>,
  ) {
    this.filterUpdates$ = this._route.queryParams.pipe(
      untilDestroyed(this),
      filter(params => params.filter),
      map(params => params.filter),
      map(mapArrayToFilter),
      map((newFilter: Filter) => new SetFilter({ filter: newFilter })),
    ).subscribe(this._store);

    this.filterMerge$ = combineLatest(this.filters$, this.filterSubject$).pipe(
      untilDestroyed(this),
      map(([ oldFilter, filterChange ]: [ Filter, FilterChange ]) => ({
        ...oldFilter,
        [filterChange.name]: filterChange.value,
      })),
      map((newFilter: Filter) => Object.keys(newFilter).filter((value: string): boolean => newFilter[value])),
    ).subscribe((values: string[]) => this._router.navigate(['search'], { queryParams: { filter: values }, queryParamsHandling: 'merge' }));
  }

  updateFilter(event: FilterChange) {
    this.filterSubject$.next(event);
  }

  ngOnDestroy() {}
}

const mapArrayToFilter = (array: string[]): Filter => ({
  films: array.indexOf('films') > -1,
  people: array.indexOf('people') > -1,
  planets: array.indexOf('planets') > -1,
  species: array.indexOf('species') > -1,
  starships: array.indexOf('starships') > -1,
  vehicles: array.indexOf('vehicles') > -1,
});
