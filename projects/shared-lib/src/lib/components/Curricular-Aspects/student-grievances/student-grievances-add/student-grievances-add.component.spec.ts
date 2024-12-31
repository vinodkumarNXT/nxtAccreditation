import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGrievancesAddComponent } from './student-grievances-add.component';

describe('StudentGrievancesAddComponent', () => {
  let component: StudentGrievancesAddComponent;
  let fixture: ComponentFixture<StudentGrievancesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGrievancesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentGrievancesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
