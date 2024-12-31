import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComputerRatioEditComponent } from './student-computer-ratio-edit.component';

describe('StudentComputerRatioEditComponent', () => {
  let component: StudentComputerRatioEditComponent;
  let fixture: ComponentFixture<StudentComputerRatioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComputerRatioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComputerRatioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
