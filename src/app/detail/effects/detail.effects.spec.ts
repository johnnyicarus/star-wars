import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { DetailEffects } from './detail.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('DetailEffects', () => {
  let actions$: Observable<any>;
  let effects: DetailEffects;

  beforeEach(() => {
    effectsTestBed(DetailEffects, actions$);

    effects = TestBed.get(DetailEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
