import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCounslingAddComponent } from './career-counsling-add.component';

describe('CareerCounslingAddComponent', () => {
  let component: CareerCounslingAddComponent;
  let fixture: ComponentFixture<CareerCounslingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCounslingAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerCounslingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
