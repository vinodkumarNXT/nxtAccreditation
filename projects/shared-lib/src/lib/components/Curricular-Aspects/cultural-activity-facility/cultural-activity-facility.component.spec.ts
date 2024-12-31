import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalActivityFacilityComponent } from './cultural-activity-facility.component';

describe('CulturalActivityFacilityComponent', () => {
  let component: CulturalActivityFacilityComponent;
  let fixture: ComponentFixture<CulturalActivityFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalActivityFacilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturalActivityFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
