import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StarshipEffects } from './starship.effects';

describe('SpaceshipEffects', () => {
  let actions$: Observable<any>;
  let effects: StarshipEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarshipEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(StarshipEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
