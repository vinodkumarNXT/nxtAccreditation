import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConservationViewComponent } from './water-conservation-view.component';

describe('WaterConservationViewComponent', () => {
  let component: WaterConservationViewComponent;
  let fixture: ComponentFixture<WaterConservationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterConservationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterConservationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
