import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStrengthViewComponent } from './student-strength-view.component';

describe('StudentStrengthViewComponent', () => {
  let component: StudentStrengthViewComponent;
  let fixture: ComponentFixture<StudentStrengthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentStrengthViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentStrengthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
