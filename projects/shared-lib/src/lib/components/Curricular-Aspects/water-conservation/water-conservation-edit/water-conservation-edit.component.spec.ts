import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConservationEditComponent } from './water-conservation-edit.component';

describe('WaterConservationEditComponent', () => {
  let component: WaterConservationEditComponent;
  let fixture: ComponentFixture<WaterConservationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterConservationEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterConservationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
