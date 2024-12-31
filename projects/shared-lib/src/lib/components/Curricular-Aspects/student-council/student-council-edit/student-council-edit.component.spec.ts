import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCouncilEditComponent } from './student-council-edit.component';

describe('StudentCouncilEditComponent', () => {
  let component: StudentCouncilEditComponent;
  let fixture: ComponentFixture<StudentCouncilEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCouncilEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCouncilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
