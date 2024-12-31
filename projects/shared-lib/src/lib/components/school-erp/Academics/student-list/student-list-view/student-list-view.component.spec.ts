import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListViewComponent } from './student-list-view.component';

describe('StudentListViewComponent', () => {
  let component: StudentListViewComponent;
  let fixture: ComponentFixture<StudentListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
