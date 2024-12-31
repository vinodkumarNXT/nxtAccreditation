import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationDashboardComponent } from './accreditation-dashboard.component';

describe('AccreditationDashboardComponent', () => {
  let component: AccreditationDashboardComponent;
  let fixture: ComponentFixture<AccreditationDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccreditationDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccreditationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
