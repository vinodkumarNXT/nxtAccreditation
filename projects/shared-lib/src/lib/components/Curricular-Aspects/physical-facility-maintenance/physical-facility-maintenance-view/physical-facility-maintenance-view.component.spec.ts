import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFacilityMaintenanceViewComponent } from './physical-facility-maintenance-view.component';

describe('PhysicalFacilityMaintenanceViewComponent', () => {
  let component: PhysicalFacilityMaintenanceViewComponent;
  let fixture: ComponentFixture<PhysicalFacilityMaintenanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalFacilityMaintenanceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalFacilityMaintenanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
