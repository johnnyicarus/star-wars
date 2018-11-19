import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthEffects } from '../effects/auth.effects';
import { provideMockActions } from '@ngrx/effects/testing';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
            StoreModule.forRoot({
              ...reducers,
            }),
      ],
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
