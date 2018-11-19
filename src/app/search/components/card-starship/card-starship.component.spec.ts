import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStarshipComponent } from './card-starship.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('CardStarshipComponent', () => {
  let component: CardStarshipComponent;
  let fixture: ComponentFixture<CardStarshipComponent>;

  beforeEach(() => {
    containerTestBed(CardStarshipComponent);

    fixture = TestBed.createComponent(CardStarshipComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
