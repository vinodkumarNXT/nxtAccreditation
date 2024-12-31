import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningFacilityViewComponent } from './teaching-learning-facility-view.component';

describe('TeachingLearningFacilityViewComponent', () => {
  let component: TeachingLearningFacilityViewComponent;
  let fixture: ComponentFixture<TeachingLearningFacilityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingLearningFacilityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingLearningFacilityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
