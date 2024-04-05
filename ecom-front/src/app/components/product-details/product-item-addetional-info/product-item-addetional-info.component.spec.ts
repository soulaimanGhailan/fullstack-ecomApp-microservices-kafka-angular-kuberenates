import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemAddetionalInfoComponent } from './product-item-addetional-info.component';

describe('ProductItemAddetionalInfoComponent', () => {
  let component: ProductItemAddetionalInfoComponent;
  let fixture: ComponentFixture<ProductItemAddetionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemAddetionalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemAddetionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
