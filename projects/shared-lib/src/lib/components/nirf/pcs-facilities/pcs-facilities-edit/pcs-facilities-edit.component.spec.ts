import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsFacilitiesEditComponent } from './pcs-facilities-edit.component';

describe('PcsFacilitiesEditComponent', () => {
  let component: PcsFacilitiesEditComponent;
  let fixture: ComponentFixture<PcsFacilitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcsFacilitiesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcsFacilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
