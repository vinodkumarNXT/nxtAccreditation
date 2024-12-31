import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGrievancesComponent } from './student-grievances.component';

describe('StudentGrievancesComponent', () => {
  let component: StudentGrievancesComponent;
  let fixture: ComponentFixture<StudentGrievancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGrievancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentGrievancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
