import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { PlanetEffects } from './planet.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('PlanetEffects', () => {
  let actions$: Observable<any>;
  let effects: PlanetEffects;

  beforeEach(() => {
    effectsTestBed(PlanetEffects, actions$);

    effects = TestBed.get(PlanetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
