import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCampusFacilityViewComponent } from './general-campus-facility-view.component';

describe('GeneralCampusFacilityViewComponent', () => {
  let component: GeneralCampusFacilityViewComponent;
  let fixture: ComponentFixture<GeneralCampusFacilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralCampusFacilityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralCampusFacilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
