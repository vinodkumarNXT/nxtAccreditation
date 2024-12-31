import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPercentageViewComponent } from './placement-percentage-view.component';

describe('PlacementPercentageViewComponent', () => {
  let component: PlacementPercentageViewComponent;
  let fixture: ComponentFixture<PlacementPercentageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementPercentageViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementPercentageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
