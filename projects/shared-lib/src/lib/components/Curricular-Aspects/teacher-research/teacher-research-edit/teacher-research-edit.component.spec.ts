import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResearchEditComponent } from './teacher-research-edit.component';

describe('TeacherResearchEditComponent', () => {
  let component: TeacherResearchEditComponent;
  let fixture: ComponentFixture<TeacherResearchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherResearchEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherResearchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
