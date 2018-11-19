import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanetComponent } from './card-planet.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('CardPlanetComponent', () => {
  let component: CardPlanetComponent;
  let fixture: ComponentFixture<CardPlanetComponent>;

  beforeEach(() => {
    containerTestBed(CardPlanetComponent);

    fixture = TestBed.createComponent(CardPlanetComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
