import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EContentFacilitiesComponent } from './e-content-facilities.component';

describe('EContentFacilitiesComponent', () => {
  let component: EContentFacilitiesComponent;
  let fixture: ComponentFixture<EContentFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EContentFacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EContentFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
