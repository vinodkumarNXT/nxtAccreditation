import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComputerRatioViewComponent } from './student-computer-ratio-view.component';

describe('StudentComputerRatioViewComponent', () => {
  let component: StudentComputerRatioViewComponent;
  let fixture: ComponentFixture<StudentComputerRatioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComputerRatioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComputerRatioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
