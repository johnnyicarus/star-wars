import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStarshipComponent } from './card-starship.component';

describe('CardStarshipComponent', () => {
  let component: CardStarshipComponent;
  let fixture: ComponentFixture<CardStarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
