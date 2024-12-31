import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPasspercentageSurveyEditComponent } from './student-passpercentage-survey-edit.component';

describe('StudentPasspercentageSurveyEditComponent', () => {
  let component: StudentPasspercentageSurveyEditComponent;
  let fixture: ComponentFixture<StudentPasspercentageSurveyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPasspercentageSurveyEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPasspercentageSurveyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
