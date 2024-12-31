import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgramsEditComponent } from './training-programs-edit.component';

describe('TrainingProgramsEditComponent', () => {
  let component: TrainingProgramsEditComponent;
  let fixture: ComponentFixture<TrainingProgramsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingProgramsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingProgramsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
