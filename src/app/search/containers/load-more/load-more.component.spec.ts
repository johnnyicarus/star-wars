import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreComponent } from './load-more.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(() => {
    containerTestBed(LoadMoreComponent);

    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
