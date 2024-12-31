import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPercentageViewComponent } from './activity-percentage-view.component';

describe('ActivityPercentageViewComponent', () => {
  let component: ActivityPercentageViewComponent;
  let fixture: ComponentFixture<ActivityPercentageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPercentageViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityPercentageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
