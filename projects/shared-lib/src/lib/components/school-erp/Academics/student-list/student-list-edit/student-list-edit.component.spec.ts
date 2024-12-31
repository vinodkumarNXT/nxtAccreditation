import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListEditComponent } from './student-list-edit.component';

describe('StudentListEditComponent', () => {
  let component: StudentListEditComponent;
  let fixture: ComponentFixture<StudentListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
