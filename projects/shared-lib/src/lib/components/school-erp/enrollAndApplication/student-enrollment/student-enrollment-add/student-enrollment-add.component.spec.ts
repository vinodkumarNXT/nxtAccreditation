import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentAddComponent } from './student-enrollment-add.component';

describe('StudentEnrollmentAddComponent', () => {
  let component: StudentEnrollmentAddComponent;
  let fixture: ComponentFixture<StudentEnrollmentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentEnrollmentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentEnrollmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
