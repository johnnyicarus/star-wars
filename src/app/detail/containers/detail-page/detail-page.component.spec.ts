import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPageComponent } from './detail-page.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(() => {
    containerTestBed(DetailPageComponent);

    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
