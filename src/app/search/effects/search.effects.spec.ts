import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SearchEffects } from './search.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('SearchEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchEffects;

  beforeEach(() => {
    effectsTestBed(SearchEffects, actions$);

    effects = TestBed.get(SearchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
