import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRatioViewComponent } from './demand-ratio-view.component';

describe('DemandRatioViewComponent', () => {
  let component: DemandRatioViewComponent;
  let fixture: ComponentFixture<DemandRatioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandRatioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandRatioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
