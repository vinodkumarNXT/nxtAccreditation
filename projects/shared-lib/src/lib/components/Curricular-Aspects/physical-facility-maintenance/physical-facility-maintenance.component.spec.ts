import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFacilityMaintenanceComponent } from './physical-facility-maintenance.component';

describe('PhysicalFacilityMaintenanceComponent', () => {
  let component: PhysicalFacilityMaintenanceComponent;
  let fixture: ComponentFixture<PhysicalFacilityMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalFacilityMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalFacilityMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
