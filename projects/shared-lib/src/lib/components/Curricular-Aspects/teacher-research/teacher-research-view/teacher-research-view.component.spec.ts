import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherResearchViewComponent } from './teacher-research-view.component';

describe('TeacherResearchViewComponent', () => {
  let component: TeacherResearchViewComponent;
  let fixture: ComponentFixture<TeacherResearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherResearchViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherResearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
