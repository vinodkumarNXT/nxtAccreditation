import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleLogsComponent } from './add-vehicle-logs.component';

describe('AddVehicleLogsComponent', () => {
  let component: AddVehicleLogsComponent;
  let fixture: ComponentFixture<AddVehicleLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVehicleLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
