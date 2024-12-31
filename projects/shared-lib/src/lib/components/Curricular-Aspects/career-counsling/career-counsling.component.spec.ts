import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCounslingComponent } from './career-counsling.component';

describe('CareerCounslingComponent', () => {
  let component: CareerCounslingComponent;
  let fixture: ComponentFixture<CareerCounslingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCounslingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerCounslingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
