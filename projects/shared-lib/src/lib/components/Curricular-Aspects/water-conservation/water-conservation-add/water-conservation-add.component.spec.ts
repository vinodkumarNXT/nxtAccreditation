import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConservationAddComponent } from './water-conservation-add.component';

describe('WaterConservationAddComponent', () => {
  let component: WaterConservationAddComponent;
  let fixture: ComponentFixture<WaterConservationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterConservationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterConservationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
