import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmComponent } from './card-film.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('CardFilmComponent', () => {
  let component: CardFilmComponent;
  let fixture: ComponentFixture<CardFilmComponent>;

  beforeEach(() => {
    containerTestBed(CardFilmComponent);

    fixture = TestBed.createComponent(CardFilmComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
