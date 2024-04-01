import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidecarComponent } from './sidecar.component';

describe('SidecarComponent', () => {
  let component: SidecarComponent;
  let fixture: ComponentFixture<SidecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidecarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
