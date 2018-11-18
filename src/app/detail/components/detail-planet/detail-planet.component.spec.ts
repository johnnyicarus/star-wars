import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlanetComponent } from './detail-planet.component';

describe('DetailPlanetComponent', () => {
  let component: DetailPlanetComponent;
  let fixture: ComponentFixture<DetailPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlanetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
