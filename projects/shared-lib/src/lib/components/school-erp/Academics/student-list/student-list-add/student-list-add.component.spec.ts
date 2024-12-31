import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListAddComponent } from './student-list-add.component';

describe('StudentListAddComponent', () => {
  let component: StudentListAddComponent;
  let fixture: ComponentFixture<StudentListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
