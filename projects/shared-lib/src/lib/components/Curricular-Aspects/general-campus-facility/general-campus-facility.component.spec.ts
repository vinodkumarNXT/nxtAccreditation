import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCampusFacilityComponent } from './general-campus-facility.component';

describe('GeneralCampusFacilityComponent', () => {
  let component: GeneralCampusFacilityComponent;
  let fixture: ComponentFixture<GeneralCampusFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralCampusFacilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralCampusFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
