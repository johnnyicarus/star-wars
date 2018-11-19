import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(() => {
    containerTestBed(ResultsListComponent);

    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
