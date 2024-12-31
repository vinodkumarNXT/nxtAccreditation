import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRatioComponent } from './demand-ratio.component';

describe('DemandRatioComponent', () => {
  let component: DemandRatioComponent;
  let fixture: ComponentFixture<DemandRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandRatioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
