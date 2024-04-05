import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomProductsComponent } from './random-products.component';

describe('RandomProductsComponent', () => {
  let component: RandomProductsComponent;
  let fixture: ComponentFixture<RandomProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
