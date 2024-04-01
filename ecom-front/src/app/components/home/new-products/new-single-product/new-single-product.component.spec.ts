import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSingleProductComponent } from './new-single-product.component';

describe('NewSingleProductComponent', () => {
  let component: NewSingleProductComponent;
  let fixture: ComponentFixture<NewSingleProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSingleProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
