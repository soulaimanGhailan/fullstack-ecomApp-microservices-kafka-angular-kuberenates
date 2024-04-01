import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductsComponent } from './selected-products.component';

describe('SelectedProductsComponent', () => {
  let component: SelectedProductsComponent;
  let fixture: ComponentFixture<SelectedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
