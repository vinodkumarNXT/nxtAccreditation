import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGrievancesViewComponent } from './student-grievances-view.component';

describe('StudentGrievancesViewComponent', () => {
  let component: StudentGrievancesViewComponent;
  let fixture: ComponentFixture<StudentGrievancesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGrievancesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentGrievancesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
