import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfCategoryListComponent } from './products-of-category-list.component';

describe('ProductsOfCategoryListComponent', () => {
  let component: ProductsOfCategoryListComponent;
  let fixture: ComponentFixture<ProductsOfCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfCategoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOfCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
