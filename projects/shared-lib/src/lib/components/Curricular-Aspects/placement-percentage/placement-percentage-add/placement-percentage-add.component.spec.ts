import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPercentageAddComponent } from './placement-percentage-add.component';

describe('PlacementPercentageAddComponent', () => {
  let component: PlacementPercentageAddComponent;
  let fixture: ComponentFixture<PlacementPercentageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementPercentageAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementPercentageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
