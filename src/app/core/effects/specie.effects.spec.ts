import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpecieEffects } from './specie.effects';

describe('SpecieEffects', () => {
  let actions$: Observable<any>;
  let effects: SpecieEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpecieEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SpecieEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
