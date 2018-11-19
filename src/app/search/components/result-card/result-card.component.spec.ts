import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCardComponent } from './result-card.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('ResultCardComponent', () => {
  let component: ResultCardComponent;
  let fixture: ComponentFixture<ResultCardComponent>;

  beforeEach(() => {
    containerTestBed(ResultCardComponent);

    fixture = TestBed.createComponent(ResultCardComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
