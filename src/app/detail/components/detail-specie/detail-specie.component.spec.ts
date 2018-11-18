import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpecieComponent } from './detail-specie.component';

describe('DetailSpecieComponent', () => {
  let component: DetailSpecieComponent;
  let fixture: ComponentFixture<DetailSpecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSpecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
