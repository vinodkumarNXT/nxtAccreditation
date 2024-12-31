import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePercentageEditComponent } from './average-percentage-edit.component';

describe('AveragePercentageEditComponent', () => {
  let component: AveragePercentageEditComponent;
  let fixture: ComponentFixture<AveragePercentageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveragePercentageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AveragePercentageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
