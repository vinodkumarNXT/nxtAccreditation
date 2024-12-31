import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCampusFacilityAddComponent } from './general-campus-facility-add.component';

describe('GeneralCampusFacilityAddComponent', () => {
  let component: GeneralCampusFacilityAddComponent;
  let fixture: ComponentFixture<GeneralCampusFacilityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralCampusFacilityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralCampusFacilityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
