import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalActivityFacilityAddComponent } from './cultural-activity-facility-add.component';

describe('CulturalActivityFacilityAddComponent', () => {
  let component: CulturalActivityFacilityAddComponent;
  let fixture: ComponentFixture<CulturalActivityFacilityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalActivityFacilityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CulturalActivityFacilityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
