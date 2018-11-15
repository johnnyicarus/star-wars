import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SetSearch } from '../../actions/search.actions';
import { selectSearchTerm } from '../../selectors/search.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchState } from '../../reducers/search.reducer';

@Component({
  selector: 'sw-search',
  template: `
      <input #searchBox
             (input)="search(searchBox.value)"
             [value]="term$ | async"
             id="search"
             name="search"
             type="search"
             placeholder="Search..."
             class="w-full h-6x p-2x focus:bg-grey-lightest focus:outline-none border-grey-light bg-white border-solid border-b lg:border-none">
  `,
  styles: [
    `input {
      height: 2.9375rem;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  term$: Observable<string> = this._store.pipe(select(selectSearchTerm));

  searchUpdates$: Subscription;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _store: Store<SearchState>,
  ) { }

  ngOnInit() {
    this.searchUpdates$ = this._route.queryParams.pipe(
      debounceTime(300),  // wait 300ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore new term if same as previous term
      filter(params => params.search),
      map((params) => new SetSearch({ term: decodeURIComponent(params.search) })),
    ).subscribe(this._store);
  }

  search(term: string) {
    this._router.navigate([ 'search' ], { queryParams: { search: encodeURIComponent(term) }, queryParamsHandling: 'merge' });
  }
}
