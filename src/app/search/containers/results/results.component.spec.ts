import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(() => {
    containerTestBed(ResultsComponent);

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
