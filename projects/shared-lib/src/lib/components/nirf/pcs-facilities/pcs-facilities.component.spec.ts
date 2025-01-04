import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsFacilitiesComponent } from './pcs-facilities.component';

describe('PcsFacilitiesComponent', () => {
  let component: PcsFacilitiesComponent;
  let fixture: ComponentFixture<PcsFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcsFacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcsFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
