import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { PersonEffects } from './person.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('PersonEffects', () => {
  let actions$: Observable<any>;
  let effects: PersonEffects;

  beforeEach(() => {
    effectsTestBed(PersonEffects, actions$);

    effects = TestBed.get(PersonEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
