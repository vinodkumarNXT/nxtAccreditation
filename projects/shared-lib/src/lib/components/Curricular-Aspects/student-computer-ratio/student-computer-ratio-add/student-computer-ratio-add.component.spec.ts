import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComputerRatioAddComponent } from './student-computer-ratio-add.component';

describe('StudentComputerRatioAddComponent', () => {
  let component: StudentComputerRatioAddComponent;
  let fixture: ComponentFixture<StudentComputerRatioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComputerRatioAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComputerRatioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
