import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCounslingEditComponent } from './career-counsling-edit.component';

describe('CareerCounslingEditComponent', () => {
  let component: CareerCounslingEditComponent;
  let fixture: ComponentFixture<CareerCounslingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCounslingEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerCounslingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
