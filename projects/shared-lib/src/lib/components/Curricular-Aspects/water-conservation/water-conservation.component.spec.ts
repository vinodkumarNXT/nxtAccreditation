import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConservationComponent } from './water-conservation.component';

describe('WaterConservationComponent', () => {
  let component: WaterConservationComponent;
  let fixture: ComponentFixture<WaterConservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterConservationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterConservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
