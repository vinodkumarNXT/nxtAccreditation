import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplaintsComponent } from './student-complaints.component';

describe('StudentComplaintsComponent', () => {
  let component: StudentComplaintsComponent;
  let fixture: ComponentFixture<StudentComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComplaintsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
