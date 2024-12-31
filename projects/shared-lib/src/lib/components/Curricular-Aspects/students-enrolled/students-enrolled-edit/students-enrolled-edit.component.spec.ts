import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEnrolledEditComponent } from './students-enrolled-edit.component';

describe('StudentsEnrolledEditComponent', () => {
  let component: StudentsEnrolledEditComponent;
  let fixture: ComponentFixture<StudentsEnrolledEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsEnrolledEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsEnrolledEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
