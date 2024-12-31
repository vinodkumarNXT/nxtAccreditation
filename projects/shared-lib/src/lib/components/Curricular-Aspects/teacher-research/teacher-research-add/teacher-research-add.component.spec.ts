import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResearchAddComponent } from './teacher-research-add.component';

describe('TeacherResearchAddComponent', () => {
  let component: TeacherResearchAddComponent;
  let fixture: ComponentFixture<TeacherResearchAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherResearchAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherResearchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
