import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingProgramsViewComponent } from './training-programs-view.component';

describe('TrainingProgramsViewComponent', () => {
  let component: TrainingProgramsViewComponent;
  let fixture: ComponentFixture<TrainingProgramsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingProgramsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingProgramsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
