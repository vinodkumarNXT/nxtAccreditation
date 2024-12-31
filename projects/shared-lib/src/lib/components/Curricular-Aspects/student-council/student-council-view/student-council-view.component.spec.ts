import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCouncilViewComponent } from './student-council-view.component';

describe('StudentCouncilViewComponent', () => {
  let component: StudentCouncilViewComponent;
  let fixture: ComponentFixture<StudentCouncilViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCouncilViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCouncilViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
