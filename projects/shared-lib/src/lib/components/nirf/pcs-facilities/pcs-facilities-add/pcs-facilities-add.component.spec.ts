import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsFacilitiesAddComponent } from './pcs-facilities-add.component';

describe('PcsFacilitiesAddComponent', () => {
  let component: PcsFacilitiesAddComponent;
  let fixture: ComponentFixture<PcsFacilitiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcsFacilitiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcsFacilitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
