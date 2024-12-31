import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalLearningViewComponent } from './experimental-learning-view.component';

describe('ExperimentalLearningViewComponent', () => {
  let component: ExperimentalLearningViewComponent;
  let fixture: ComponentFixture<ExperimentalLearningViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentalLearningViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentalLearningViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
