import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleRoutesComponent } from './add-vehicle-routes.component';

describe('AddVehicleRoutesComponent', () => {
  let component: AddVehicleRoutesComponent;
  let fixture: ComponentFixture<AddVehicleRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVehicleRoutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVehicleRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
