import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContentFacilitiesEditComponent } from './e-content-facilities-edit.component';

describe('EContentFacilitiesEditComponent', () => {
  let component: EContentFacilitiesEditComponent;
  let fixture: ComponentFixture<EContentFacilitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EContentFacilitiesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EContentFacilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
