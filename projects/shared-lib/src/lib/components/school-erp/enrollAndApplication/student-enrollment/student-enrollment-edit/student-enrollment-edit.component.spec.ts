import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentEditComponent } from './student-enrollment-edit.component';

describe('StudentEnrollmentEditComponent', () => {
  let component: StudentEnrollmentEditComponent;
  let fixture: ComponentFixture<StudentEnrollmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentEnrollmentEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentEnrollmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
