import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutcomesEditComponent } from './learning-outcomes-edit.component';

describe('LearningOutcomesEditComponent', () => {
  let component: LearningOutcomesEditComponent;
  let fixture: ComponentFixture<LearningOutcomesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningOutcomesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningOutcomesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
