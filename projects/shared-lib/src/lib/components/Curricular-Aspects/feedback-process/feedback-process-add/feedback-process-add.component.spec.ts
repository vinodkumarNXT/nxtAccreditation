import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProcessAddComponent } from './feedback-process-add.component';

describe('FeedbackProcessAddComponent', () => {
  let component: FeedbackProcessAddComponent;
  let fixture: ComponentFixture<FeedbackProcessAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackProcessAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackProcessAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
