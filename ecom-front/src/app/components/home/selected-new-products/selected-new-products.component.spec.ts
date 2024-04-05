import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedNewProductsComponent } from './selected-new-products.component';

describe('SelectedNewProductsComponent', () => {
  let component: SelectedNewProductsComponent;
  let fixture: ComponentFixture<SelectedNewProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedNewProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedNewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
