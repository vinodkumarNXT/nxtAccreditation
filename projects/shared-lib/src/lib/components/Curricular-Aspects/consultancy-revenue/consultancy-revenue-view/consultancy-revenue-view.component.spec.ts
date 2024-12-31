import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyRevenueViewComponent } from './consultancy-revenue-view.component';

describe('ConsultancyRevenueViewComponent', () => {
  let component: ConsultancyRevenueViewComponent;
  let fixture: ComponentFixture<ConsultancyRevenueViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyRevenueViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyRevenueViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
