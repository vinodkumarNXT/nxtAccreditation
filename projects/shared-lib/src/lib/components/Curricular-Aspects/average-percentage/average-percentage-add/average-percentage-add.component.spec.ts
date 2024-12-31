import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AveragePercentageAddComponent } from './average-percentage-add.component';

describe('AveragePercentageAddComponent', () => {
  let component: AveragePercentageAddComponent;
  let fixture: ComponentFixture<AveragePercentageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AveragePercentageAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AveragePercentageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
