import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComputerRatioComponent } from './student-computer-ratio.component';

describe('StudentComputerRatioComponent', () => {
  let component: StudentComputerRatioComponent;
  let fixture: ComponentFixture<StudentComputerRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComputerRatioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComputerRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
