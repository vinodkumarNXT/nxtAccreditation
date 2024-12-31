import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningOutcomesAddComponent } from './learning-outcomes-add.component';

describe('LearningOutcomesAddComponent', () => {
  let component: LearningOutcomesAddComponent;
  let fixture: ComponentFixture<LearningOutcomesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningOutcomesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningOutcomesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
