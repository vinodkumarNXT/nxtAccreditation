import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProcessViewComponent } from './feedback-process-view.component';

describe('FeedbackProcessViewComponent', () => {
  let component: FeedbackProcessViewComponent;
  let fixture: ComponentFixture<FeedbackProcessViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackProcessViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackProcessViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
