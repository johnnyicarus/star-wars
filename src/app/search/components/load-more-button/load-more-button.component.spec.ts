import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreButtonComponent } from './load-more-button.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('LoadMoreButtonComponent', () => {
  let component: LoadMoreButtonComponent;
  let fixture: ComponentFixture<LoadMoreButtonComponent>;

  beforeEach(() => {
    containerTestBed(LoadMoreButtonComponent);

    fixture = TestBed.createComponent(LoadMoreButtonComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
