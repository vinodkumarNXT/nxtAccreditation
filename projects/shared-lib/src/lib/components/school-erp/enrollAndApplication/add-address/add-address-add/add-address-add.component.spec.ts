import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressAddComponent } from './add-address-add.component';

describe('AddAddressAddComponent', () => {
  let component: AddAddressAddComponent;
  let fixture: ComponentFixture<AddAddressAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAddressAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAddressAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
