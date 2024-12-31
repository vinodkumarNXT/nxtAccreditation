import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalLearningAddComponent } from './experimental-learning-add.component';

describe('ExperimentalLearningAddComponent', () => {
  let component: ExperimentalLearningAddComponent;
  let fixture: ComponentFixture<ExperimentalLearningAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentalLearningAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentalLearningAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
