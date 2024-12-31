import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEcontentEditComponent } from './teacher-econtent-edit.component';

describe('TeacherEcontentEditComponent', () => {
  let component: TeacherEcontentEditComponent;
  let fixture: ComponentFixture<TeacherEcontentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherEcontentEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherEcontentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
