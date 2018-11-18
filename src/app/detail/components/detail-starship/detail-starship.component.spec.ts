import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStarshipComponent } from './detail-starship.component';

describe('DetailStarshipComponent', () => {
  let component: DetailStarshipComponent;
  let fixture: ComponentFixture<DetailStarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailStarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
