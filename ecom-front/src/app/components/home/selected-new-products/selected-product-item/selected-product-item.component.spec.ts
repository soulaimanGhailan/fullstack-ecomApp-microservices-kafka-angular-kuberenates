import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProductItemComponent } from './selected-product-item.component';

describe('SelectedProductItemComponent', () => {
  let component: SelectedProductItemComponent;
  let fixture: ComponentFixture<SelectedProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedProductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
