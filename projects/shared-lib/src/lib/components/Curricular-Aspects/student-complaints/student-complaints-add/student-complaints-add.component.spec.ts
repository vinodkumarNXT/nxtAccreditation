import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplaintsAddComponent } from './student-complaints-add.component';

describe('StudentComplaintsAddComponent', () => {
  let component: StudentComplaintsAddComponent;
  let fixture: ComponentFixture<StudentComplaintsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComplaintsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComplaintsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
