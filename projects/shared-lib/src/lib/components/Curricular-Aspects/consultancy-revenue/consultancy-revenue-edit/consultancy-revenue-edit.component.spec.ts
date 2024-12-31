import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyRevenueEditComponent } from './consultancy-revenue-edit.component';

describe('ConsultancyRevenueEditComponent', () => {
  let component: ConsultancyRevenueEditComponent;
  let fixture: ComponentFixture<ConsultancyRevenueEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyRevenueEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyRevenueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
