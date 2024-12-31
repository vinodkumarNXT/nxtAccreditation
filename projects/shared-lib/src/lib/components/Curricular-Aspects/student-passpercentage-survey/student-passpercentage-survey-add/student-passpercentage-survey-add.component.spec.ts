import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPasspercentageSurveyAddComponent } from './student-passpercentage-survey-add.component';

describe('StudentPasspercentageSurveyAddComponent', () => {
  let component: StudentPasspercentageSurveyAddComponent;
  let fixture: ComponentFixture<StudentPasspercentageSurveyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPasspercentageSurveyAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPasspercentageSurveyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
