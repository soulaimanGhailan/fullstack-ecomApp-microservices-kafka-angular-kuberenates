import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPickedImagesComponent } from './product-picked-images.component';

describe('ProductPickedImagesComponent', () => {
  let component: ProductPickedImagesComponent;
  let fixture: ComponentFixture<ProductPickedImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPickedImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPickedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
