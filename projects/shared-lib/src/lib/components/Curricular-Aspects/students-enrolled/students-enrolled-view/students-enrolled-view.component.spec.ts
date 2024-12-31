import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEnrolledViewComponent } from './students-enrolled-view.component';

describe('StudentsEnrolledViewComponent', () => {
  let component: StudentsEnrolledViewComponent;
  let fixture: ComponentFixture<StudentsEnrolledViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsEnrolledViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsEnrolledViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
