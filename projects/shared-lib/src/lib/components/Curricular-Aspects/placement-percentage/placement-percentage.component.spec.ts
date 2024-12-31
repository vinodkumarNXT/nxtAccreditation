import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPercentageComponent } from './placement-percentage.component';

describe('PlacementPercentageComponent', () => {
  let component: PlacementPercentageComponent;
  let fixture: ComponentFixture<PlacementPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementPercentageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
