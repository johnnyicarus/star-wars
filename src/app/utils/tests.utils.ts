import { StoreModule } from '@ngrx/store';
import { reducers } from '../reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from '../core/services/api.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';

export const containerTestBed = (component: any) => {
  TestBed.configureTestingModule({
    declarations: [ component ],
    imports: [
      SharedModule,
      StoreModule.forRoot({ ...reducers }),
      RouterTestingModule,
      NoopAnimationsModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  });
};

export const effectsTestBed = (effect: any, action: Observable<any>) => {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      StoreModule.forRoot({
        ...reducers,
      }),
    ],
    providers: [
      effect,
      ApiService,
      provideMockActions(() => action)
    ]
  });
};
