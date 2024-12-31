import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutcomesViewComponent } from './learning-outcomes-view.component';

describe('LearningOutcomesViewComponent', () => {
  let component: LearningOutcomesViewComponent;
  let fixture: ComponentFixture<LearningOutcomesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningOutcomesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningOutcomesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
