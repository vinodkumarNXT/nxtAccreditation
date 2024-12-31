import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDevelopmentProgramAddComponent } from './faculty-development-program-add.component';

describe('FacultyDevelopmentProgramAddComponent', () => {
  let component: FacultyDevelopmentProgramAddComponent;
  let fixture: ComponentFixture<FacultyDevelopmentProgramAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDevelopmentProgramAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDevelopmentProgramAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
