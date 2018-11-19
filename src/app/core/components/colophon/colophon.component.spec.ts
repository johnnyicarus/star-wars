import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColophonComponent } from './colophon.component';

describe('ColophonComponent', () => {
  let component: ColophonComponent;
  let fixture: ComponentFixture<ColophonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColophonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColophonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
