import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStarshipComponent } from './detail-starship.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('DetailStarshipComponent', () => {
  let component: DetailStarshipComponent;
  let fixture: ComponentFixture<DetailStarshipComponent>;

  beforeEach(() => {
    containerTestBed(DetailStarshipComponent);

    fixture = TestBed.createComponent(DetailStarshipComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
