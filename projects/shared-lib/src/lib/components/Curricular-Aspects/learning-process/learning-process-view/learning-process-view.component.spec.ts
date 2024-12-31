import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningProcessViewComponent } from './learning-process-view.component';

describe('LearningProcessViewComponent', () => {
  let component: LearningProcessViewComponent;
  let fixture: ComponentFixture<LearningProcessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningProcessViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningProcessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
