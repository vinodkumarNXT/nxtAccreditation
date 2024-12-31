import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDevelopmentProgramEditComponent } from './faculty-development-program-edit.component';

describe('FacultyDevelopmentProgramEditComponent', () => {
  let component: FacultyDevelopmentProgramEditComponent;
  let fixture: ComponentFixture<FacultyDevelopmentProgramEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDevelopmentProgramEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDevelopmentProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
