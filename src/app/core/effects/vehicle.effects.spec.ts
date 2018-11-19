import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { VehicleEffects } from './vehicle.effects';
import { effectsTestBed } from '../../utils/tests.utils';

describe('VehicleEffects', () => {
  let actions$: Observable<any>;
  let effects: VehicleEffects;

  beforeEach(() => {
    effectsTestBed(VehicleEffects, actions$);

    effects = TestBed.get(VehicleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
