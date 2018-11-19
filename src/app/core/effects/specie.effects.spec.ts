import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { SpecieEffects } from './specie.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('SpecieEffects', () => {
  let actions$: Observable<any>;
  let effects: SpecieEffects;

  beforeEach(() => {
    effectsTestBed(SpecieEffects, actions$);

    effects = TestBed.get(SpecieEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
