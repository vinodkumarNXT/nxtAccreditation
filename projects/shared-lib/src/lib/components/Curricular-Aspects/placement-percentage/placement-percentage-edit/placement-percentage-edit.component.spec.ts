import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementPercentageEditComponent } from './placement-percentage-edit.component';

describe('PlacementPercentageEditComponent', () => {
  let component: PlacementPercentageEditComponent;
  let fixture: ComponentFixture<PlacementPercentageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacementPercentageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlacementPercentageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
