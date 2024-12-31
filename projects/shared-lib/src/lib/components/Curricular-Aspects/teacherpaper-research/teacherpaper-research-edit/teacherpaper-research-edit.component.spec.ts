import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherpaperResearchEditComponent } from './teacherpaper-research-edit.component';

describe('TeacherpaperResearchEditComponent', () => {
  let component: TeacherpaperResearchEditComponent;
  let fixture: ComponentFixture<TeacherpaperResearchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherpaperResearchEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherpaperResearchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
