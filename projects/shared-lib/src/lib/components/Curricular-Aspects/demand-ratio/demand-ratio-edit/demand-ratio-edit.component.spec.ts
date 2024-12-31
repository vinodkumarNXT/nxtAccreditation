import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRatioEditComponent } from './demand-ratio-edit.component';

describe('DemandRatioEditComponent', () => {
  let component: DemandRatioEditComponent;
  let fixture: ComponentFixture<DemandRatioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandRatioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandRatioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
