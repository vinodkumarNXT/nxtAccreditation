import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProcessEditComponent } from './feedback-process-edit.component';

describe('FeedbackProcessEditComponent', () => {
  let component: FeedbackProcessEditComponent;
  let fixture: ComponentFixture<FeedbackProcessEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackProcessEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackProcessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
