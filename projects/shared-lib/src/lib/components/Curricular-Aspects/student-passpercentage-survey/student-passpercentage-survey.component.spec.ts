import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPasspercentageSurveyComponent } from './student-passpercentage-survey.component';

describe('StudentPasspercentageSurveyComponent', () => {
  let component: StudentPasspercentageSurveyComponent;
  let fixture: ComponentFixture<StudentPasspercentageSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPasspercentageSurveyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPasspercentageSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
