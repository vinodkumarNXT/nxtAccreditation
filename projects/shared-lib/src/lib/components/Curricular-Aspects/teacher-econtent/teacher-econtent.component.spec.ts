import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherEcontentComponent } from './teacher-econtent.component';

describe('TeacherEcontentComponent', () => {
  let component: TeacherEcontentComponent;
  let fixture: ComponentFixture<TeacherEcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherEcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherEcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
