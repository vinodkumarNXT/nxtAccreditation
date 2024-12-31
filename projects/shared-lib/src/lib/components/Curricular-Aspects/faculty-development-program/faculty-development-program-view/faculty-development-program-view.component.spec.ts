import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDevelopmentProgramViewComponent } from './faculty-development-program-view.component';

describe('FacultyDevelopmentProgramViewComponent', () => {
  let component: FacultyDevelopmentProgramViewComponent;
  let fixture: ComponentFixture<FacultyDevelopmentProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDevelopmentProgramViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDevelopmentProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
