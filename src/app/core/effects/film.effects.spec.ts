import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { FilmEffects } from './film.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('FilmEffects', () => {
  let actions$: Observable<any>;
  let effects: FilmEffects;

  beforeEach(() => {
    effectsTestBed(FilmEffects, actions$);

    effects = TestBed.get(FilmEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
