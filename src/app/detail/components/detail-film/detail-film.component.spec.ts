import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFilmComponent } from './detail-film.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('DetailFilmComponent', () => {
  let component: DetailFilmComponent;
  let fixture: ComponentFixture<DetailFilmComponent>;

  beforeEach(() => {
    containerTestBed(DetailFilmComponent);

    fixture = TestBed.createComponent(DetailFilmComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
