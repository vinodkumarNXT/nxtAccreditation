import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCouncilAddComponent } from './student-council-add.component';

describe('StudentCouncilAddComponent', () => {
  let component: StudentCouncilAddComponent;
  let fixture: ComponentFixture<StudentCouncilAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCouncilAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCouncilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
