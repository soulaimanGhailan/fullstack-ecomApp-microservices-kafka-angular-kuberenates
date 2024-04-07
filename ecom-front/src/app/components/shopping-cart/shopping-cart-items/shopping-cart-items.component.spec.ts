import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartItemsComponent } from './shopping-cart-items.component';

describe('ShoppingCartItemsComponent', () => {
  let component: ShoppingCartItemsComponent;
  let fixture: ComponentFixture<ShoppingCartItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
