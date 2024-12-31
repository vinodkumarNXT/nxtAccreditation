import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningFacilityAddComponent } from './teaching-learning-facility-add.component';

describe('TeachingLearningFacilityAddComponent', () => {
  let component: TeachingLearningFacilityAddComponent;
  let fixture: ComponentFixture<TeachingLearningFacilityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingLearningFacilityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingLearningFacilityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
