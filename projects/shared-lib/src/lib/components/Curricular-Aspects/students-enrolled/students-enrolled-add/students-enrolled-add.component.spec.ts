import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEnrolledAddComponent } from './students-enrolled-add.component';

describe('StudentsEnrolledAddComponent', () => {
  let component: StudentsEnrolledAddComponent;
  let fixture: ComponentFixture<StudentsEnrolledAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsEnrolledAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsEnrolledAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
