import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonComponent } from './card-person.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('CardPersonComponent', () => {
  let component: CardPersonComponent;
  let fixture: ComponentFixture<CardPersonComponent>;

  beforeEach(() => {
    containerTestBed(CardPersonComponent);

    fixture = TestBed.createComponent(CardPersonComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
