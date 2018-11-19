import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVehicleComponent } from './card-vehicle.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('CardVehicleComponent', () => {
  let component: CardVehicleComponent;
  let fixture: ComponentFixture<CardVehicleComponent>;

  beforeEach(() => {
    containerTestBed(CardVehicleComponent);

    fixture = TestBed.createComponent(CardVehicleComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
