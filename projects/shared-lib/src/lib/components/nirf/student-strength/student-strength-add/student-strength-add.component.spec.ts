import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStrengthAddComponent } from './student-strength-add.component';

describe('StudentStrengthAddComponent', () => {
  let component: StudentStrengthAddComponent;
  let fixture: ComponentFixture<StudentStrengthAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentStrengthAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentStrengthAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
