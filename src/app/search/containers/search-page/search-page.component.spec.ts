import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPageComponent } from './search-page.component';
import { containerTestBed } from '../../../utils/tests.utils';

describe('SearchPageComponent', () => {
  let component: SearchPageComponent;
  let fixture: ComponentFixture<SearchPageComponent>;

  beforeEach(() => {
    containerTestBed(SearchPageComponent);

    fixture = TestBed.createComponent(SearchPageComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
