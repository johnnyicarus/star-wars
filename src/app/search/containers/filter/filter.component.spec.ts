import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    containerTestBed(FilterComponent);

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
