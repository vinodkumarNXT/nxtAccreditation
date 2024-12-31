import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplaintsEditComponent } from './student-complaints-edit.component';

describe('StudentComplaintsEditComponent', () => {
  let component: StudentComplaintsEditComponent;
  let fixture: ComponentFixture<StudentComplaintsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComplaintsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComplaintsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
