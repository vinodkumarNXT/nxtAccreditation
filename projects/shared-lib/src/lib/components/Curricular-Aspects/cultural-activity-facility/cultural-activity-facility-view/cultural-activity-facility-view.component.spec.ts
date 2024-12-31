import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalActivityFacilityViewComponent } from './cultural-activity-facility-view.component';

describe('CulturalActivityFacilityViewComponent', () => {
  let component: CulturalActivityFacilityViewComponent;
  let fixture: ComponentFixture<CulturalActivityFacilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalActivityFacilityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturalActivityFacilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
