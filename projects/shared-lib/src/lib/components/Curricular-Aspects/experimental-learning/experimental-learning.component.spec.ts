import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalLearningComponent } from './experimental-learning.component';

describe('ExperimentalLearningComponent', () => {
  let component: ExperimentalLearningComponent;
  let fixture: ComponentFixture<ExperimentalLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentalLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentalLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
