import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningFacilityComponent } from './teaching-learning-facility.component';

describe('TeachingLearningFacilityComponent', () => {
  let component: TeachingLearningFacilityComponent;
  let fixture: ComponentFixture<TeachingLearningFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingLearningFacilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingLearningFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
