import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCounslingViewComponent } from './career-counsling-view.component';

describe('CareerCounslingViewComponent', () => {
  let component: CareerCounslingViewComponent;
  let fixture: ComponentFixture<CareerCounslingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCounslingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerCounslingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
