import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DetailEffects } from './detail.effects';

describe('DetailEffects', () => {
  let actions$: Observable<any>;
  let effects: DetailEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DetailEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(DetailEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
