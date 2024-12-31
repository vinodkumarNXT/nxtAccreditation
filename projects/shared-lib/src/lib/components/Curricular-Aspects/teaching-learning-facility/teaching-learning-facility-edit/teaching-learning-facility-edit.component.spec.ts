import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningFacilityEditComponent } from './teaching-learning-facility-edit.component';

describe('TeachingLearningFacilityEditComponent', () => {
  let component: TeachingLearningFacilityEditComponent;
  let fixture: ComponentFixture<TeachingLearningFacilityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingLearningFacilityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingLearningFacilityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
