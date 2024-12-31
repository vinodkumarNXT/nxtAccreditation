import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrollmentViewComponent } from './student-enrollment-view.component';

describe('StudentEnrollmentViewComponent', () => {
  let component: StudentEnrollmentViewComponent;
  let fixture: ComponentFixture<StudentEnrollmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentEnrollmentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentEnrollmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
