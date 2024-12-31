import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCampusFacilityEditComponent } from './general-campus-facility-edit.component';

describe('GeneralCampusFacilityEditComponent', () => {
  let component: GeneralCampusFacilityEditComponent;
  let fixture: ComponentFixture<GeneralCampusFacilityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralCampusFacilityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralCampusFacilityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
