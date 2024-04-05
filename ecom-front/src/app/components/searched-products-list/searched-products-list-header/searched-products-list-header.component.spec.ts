import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedProductsListHeaderComponent } from './searched-products-list-header.component';

describe('SearchedProductsListHeaderComponent', () => {
  let component: SearchedProductsListHeaderComponent;
  let fixture: ComponentFixture<SearchedProductsListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedProductsListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedProductsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
