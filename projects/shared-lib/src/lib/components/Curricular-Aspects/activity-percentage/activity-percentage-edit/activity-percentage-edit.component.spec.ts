import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPercentageEditComponent } from './activity-percentage-edit.component';

describe('ActivityPercentageEditComponent', () => {
  let component: ActivityPercentageEditComponent;
  let fixture: ComponentFixture<ActivityPercentageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityPercentageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivityPercentageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
