import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPercentageComponent } from './activity-percentage.component';

describe('ActivityPercentageComponent', () => {
  let component: ActivityPercentageComponent;
  let fixture: ComponentFixture<ActivityPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPercentageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
