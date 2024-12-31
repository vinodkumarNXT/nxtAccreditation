import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyRevenueComponent } from './consultancy-revenue.component';

describe('ConsultancyRevenueComponent', () => {
  let component: ConsultancyRevenueComponent;
  let fixture: ComponentFixture<ConsultancyRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyRevenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
