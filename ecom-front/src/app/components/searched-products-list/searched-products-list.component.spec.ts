import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedProductsListComponent } from './searched-products-list.component';

describe('SearchedProductsListComponent', () => {
  let component: SearchedProductsListComponent;
  let fixture: ComponentFixture<SearchedProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
