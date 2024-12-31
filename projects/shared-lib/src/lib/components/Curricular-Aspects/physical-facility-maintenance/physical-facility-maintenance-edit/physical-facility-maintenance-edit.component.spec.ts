import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalFacilityMaintenanceEditComponent } from './physical-facility-maintenance-edit.component';

describe('PhysicalFacilityMaintenanceEditComponent', () => {
  let component: PhysicalFacilityMaintenanceEditComponent;
  let fixture: ComponentFixture<PhysicalFacilityMaintenanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhysicalFacilityMaintenanceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalFacilityMaintenanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
