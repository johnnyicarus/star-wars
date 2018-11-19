import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanetComponent } from './detail-planet.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('DetailPlanetComponent', () => {
  let component: DetailPlanetComponent;
  let fixture: ComponentFixture<DetailPlanetComponent>;

  beforeEach(() => {
    containerTestBed(DetailPlanetComponent);

    fixture = TestBed.createComponent(DetailPlanetComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
