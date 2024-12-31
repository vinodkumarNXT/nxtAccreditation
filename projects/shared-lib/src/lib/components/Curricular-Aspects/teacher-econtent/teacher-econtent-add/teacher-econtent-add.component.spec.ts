import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEcontentAddComponent } from './teacher-econtent-add.component';

describe('TeacherEcontentAddComponent', () => {
  let component: TeacherEcontentAddComponent;
  let fixture: ComponentFixture<TeacherEcontentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherEcontentAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherEcontentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
