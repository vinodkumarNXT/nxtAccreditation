import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsFacilitiesViewComponent } from './pcs-facilities-view.component';

describe('PcsFacilitiesViewComponent', () => {
  let component: PcsFacilitiesViewComponent;
  let fixture: ComponentFixture<PcsFacilitiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcsFacilitiesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PcsFacilitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
