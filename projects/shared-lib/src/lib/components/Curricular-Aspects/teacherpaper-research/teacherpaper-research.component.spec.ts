import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaperResearchComponent } from './teacherpaper-research.component';

describe('TeacherpaperResearchComponent', () => {
  let component: TeacherpaperResearchComponent;
  let fixture: ComponentFixture<TeacherpaperResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherpaperResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherpaperResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
