import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecieComponent } from './detail-specie.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('DetailSpecieComponent', () => {
  let component: DetailSpecieComponent;
  let fixture: ComponentFixture<DetailSpecieComponent>;

  beforeEach(() => {
    containerTestBed(DetailSpecieComponent);

    fixture = TestBed.createComponent(DetailSpecieComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
