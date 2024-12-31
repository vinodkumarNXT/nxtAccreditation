import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFacilityMaintenanceAddComponent } from './physical-facility-maintenance-add.component';

describe('PhysicalFacilityMaintenanceAddComponent', () => {
  let component: PhysicalFacilityMaintenanceAddComponent;
  let fixture: ComponentFixture<PhysicalFacilityMaintenanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalFacilityMaintenanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalFacilityMaintenanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
