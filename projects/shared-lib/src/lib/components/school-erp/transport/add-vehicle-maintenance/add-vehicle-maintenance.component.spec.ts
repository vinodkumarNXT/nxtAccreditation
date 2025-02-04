import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleMaintenanceComponent } from './add-vehicle-maintenance.component';

describe('AddVehicleMaintenanceComponent', () => {
  let component: AddVehicleMaintenanceComponent;
  let fixture: ComponentFixture<AddVehicleMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVehicleMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
