import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgramsAddComponent } from './training-programs-add.component';

describe('TrainingProgramsAddComponent', () => {
  let component: TrainingProgramsAddComponent;
  let fixture: ComponentFixture<TrainingProgramsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingProgramsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingProgramsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
