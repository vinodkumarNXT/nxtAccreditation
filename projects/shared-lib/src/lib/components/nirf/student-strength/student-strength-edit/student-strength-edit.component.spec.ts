import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStrengthEditComponent } from './student-strength-edit.component';

describe('StudentStrengthEditComponent', () => {
  let component: StudentStrengthEditComponent;
  let fixture: ComponentFixture<StudentStrengthEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentStrengthEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentStrengthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
