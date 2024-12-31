import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalLearningEditComponent } from './experimental-learning-edit.component';

describe('ExperimentalLearningEditComponent', () => {
  let component: ExperimentalLearningEditComponent;
  let fixture: ComponentFixture<ExperimentalLearningEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperimentalLearningEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperimentalLearningEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
