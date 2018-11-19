import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecieComponent } from './card-specie.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('CardSpecieComponent', () => {
  let component: CardSpecieComponent;
  let fixture: ComponentFixture<CardSpecieComponent>;

  beforeEach(() => {
    containerTestBed(CardSpecieComponent);

    fixture = TestBed.createComponent(CardSpecieComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
