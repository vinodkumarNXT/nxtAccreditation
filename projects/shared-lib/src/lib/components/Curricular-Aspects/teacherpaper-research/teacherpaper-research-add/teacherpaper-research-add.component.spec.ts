import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaperResearchAddComponent } from './teacherpaper-research-add.component';

describe('TeacherpaperResearchAddComponent', () => {
  let component: TeacherpaperResearchAddComponent;
  let fixture: ComponentFixture<TeacherpaperResearchAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherpaperResearchAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherpaperResearchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
