import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectedProductComponent } from './single-selected-product.component';

describe('SingleSelectedProductComponent', () => {
  let component: SingleSelectedProductComponent;
  let fixture: ComponentFixture<SingleSelectedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSelectedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSelectedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
