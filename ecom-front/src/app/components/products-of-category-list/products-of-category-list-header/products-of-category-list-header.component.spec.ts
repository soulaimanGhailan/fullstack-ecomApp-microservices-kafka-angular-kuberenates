import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfCategoryListHeaderComponent } from './products-of-category-list-header.component';

describe('ProductsOfCategoryListHeaderComponent', () => {
  let component: ProductsOfCategoryListHeaderComponent;
  let fixture: ComponentFixture<ProductsOfCategoryListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfCategoryListHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOfCategoryListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
