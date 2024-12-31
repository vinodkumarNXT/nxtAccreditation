import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRatioAddComponent } from './demand-ratio-add.component';

describe('DemandRatioAddComponent', () => {
  let component: DemandRatioAddComponent;
  let fixture: ComponentFixture<DemandRatioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandRatioAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandRatioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
