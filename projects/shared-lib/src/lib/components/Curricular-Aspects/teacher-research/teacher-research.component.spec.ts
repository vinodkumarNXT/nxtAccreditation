import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResearchComponent } from './teacher-research.component';

describe('TeacherResearchComponent', () => {
  let component: TeacherResearchComponent;
  let fixture: ComponentFixture<TeacherResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
