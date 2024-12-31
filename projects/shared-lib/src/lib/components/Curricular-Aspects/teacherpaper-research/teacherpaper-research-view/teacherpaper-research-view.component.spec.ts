import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaperResearchViewComponent } from './teacherpaper-research-view.component';

describe('TeacherpaperResearchViewComponent', () => {
  let component: TeacherpaperResearchViewComponent;
  let fixture: ComponentFixture<TeacherpaperResearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherpaperResearchViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherpaperResearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
