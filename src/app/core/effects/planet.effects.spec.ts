import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlanetEffects } from './planet.effects';

describe('PlanetEffects', () => {
  let actions$: Observable<any>;
  let effects: PlanetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlanetEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PlanetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
