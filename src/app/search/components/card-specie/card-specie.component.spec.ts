import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpecieComponent } from './card-specie.component';

describe('CardSpecieComponent', () => {
  let component: CardSpecieComponent;
  let fixture: ComponentFixture<CardSpecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSpecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
