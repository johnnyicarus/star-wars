import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPersonComponent } from './detail-person.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('DetailPersonComponent', () => {
  let component: DetailPersonComponent;
  let fixture: ComponentFixture<DetailPersonComponent>;

  beforeEach(() => {
    containerTestBed(DetailPersonComponent);

    fixture = TestBed.createComponent(DetailPersonComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
