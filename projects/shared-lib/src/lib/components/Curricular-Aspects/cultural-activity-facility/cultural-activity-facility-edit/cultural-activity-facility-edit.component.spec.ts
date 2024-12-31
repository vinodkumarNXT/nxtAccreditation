import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalActivityFacilityEditComponent } from './cultural-activity-facility-edit.component';

describe('CulturalActivityFacilityEditComponent', () => {
  let component: CulturalActivityFacilityEditComponent;
  let fixture: ComponentFixture<CulturalActivityFacilityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalActivityFacilityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturalActivityFacilityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
