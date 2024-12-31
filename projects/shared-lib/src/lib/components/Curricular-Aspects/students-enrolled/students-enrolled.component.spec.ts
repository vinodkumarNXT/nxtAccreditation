import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEnrolledComponent } from './students-enrolled.component';

describe('StudentsEnrolledComponent', () => {
  let component: StudentsEnrolledComponent;
  let fixture: ComponentFixture<StudentsEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsEnrolledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
