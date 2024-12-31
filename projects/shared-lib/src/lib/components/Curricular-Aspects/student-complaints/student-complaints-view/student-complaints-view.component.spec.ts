import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComplaintsViewComponent } from './student-complaints-view.component';

describe('StudentComplaintsViewComponent', () => {
  let component: StudentComplaintsViewComponent;
  let fixture: ComponentFixture<StudentComplaintsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComplaintsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentComplaintsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
