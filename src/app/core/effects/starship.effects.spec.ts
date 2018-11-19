import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { StarshipEffects } from './starship.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('SpaceshipEffects', () => {
  let actions$: Observable<any>;
  let effects: StarshipEffects;

  beforeEach(() => {
    effectsTestBed(StarshipEffects, actions$);

    effects = TestBed.get(StarshipEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
