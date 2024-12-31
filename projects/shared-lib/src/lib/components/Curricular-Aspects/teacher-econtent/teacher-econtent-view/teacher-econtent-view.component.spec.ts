import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEcontentViewComponent } from './teacher-econtent-view.component';

describe('TeacherEcontentViewComponent', () => {
  let component: TeacherEcontentViewComponent;
  let fixture: ComponentFixture<TeacherEcontentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherEcontentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherEcontentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
