import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressEditComponent } from './add-address-edit.component';

describe('AddAddressEditComponent', () => {
  let component: AddAddressEditComponent;
  let fixture: ComponentFixture<AddAddressEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAddressEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
