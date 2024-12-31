import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyRevenueAddComponent } from './consultancy-revenue-add.component';

describe('ConsultancyRevenueAddComponent', () => {
  let component: ConsultancyRevenueAddComponent;
  let fixture: ComponentFixture<ConsultancyRevenueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyRevenueAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyRevenueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
