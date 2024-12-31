import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGrievancesEditComponent } from './student-grievances-edit.component';

describe('StudentGrievancesEditComponent', () => {
  let component: StudentGrievancesEditComponent;
  let fixture: ComponentFixture<StudentGrievancesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGrievancesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentGrievancesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
