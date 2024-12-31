import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressViewComponent } from './add-address-view.component';

describe('AddAddressViewComponent', () => {
  let component: AddAddressViewComponent;
  let fixture: ComponentFixture<AddAddressViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAddressViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAddressViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
