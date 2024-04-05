import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemDescriptionComponent } from './product-item-description.component';

describe('ProductItemDescriptionComponent', () => {
  let component: ProductItemDescriptionComponent;
  let fixture: ComponentFixture<ProductItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
