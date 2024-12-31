import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPasspercentageSurveyViewComponent } from './student-passpercentage-survey-view.component';

describe('StudentPasspercentageSurveyViewComponent', () => {
  let component: StudentPasspercentageSurveyViewComponent;
  let fixture: ComponentFixture<StudentPasspercentageSurveyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentPasspercentageSurveyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentPasspercentageSurveyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
