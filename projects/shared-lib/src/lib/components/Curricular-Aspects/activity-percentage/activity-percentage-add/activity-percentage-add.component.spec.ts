import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPercentageAddComponent } from './activity-percentage-add.component';

describe('ActivityPercentageAddComponent', () => {
  let component: ActivityPercentageAddComponent;
  let fixture: ComponentFixture<ActivityPercentageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPercentageAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityPercentageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
