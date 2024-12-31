import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePercentageViewComponent } from './average-percentage-view.component';

describe('AveragePercentageViewComponent', () => {
  let component: AveragePercentageViewComponent;
  let fixture: ComponentFixture<AveragePercentageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveragePercentageViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AveragePercentageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
