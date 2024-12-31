import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEquityViewComponent } from './gender-equity-view.component';

describe('GenderEquityViewComponent', () => {
  let component: GenderEquityViewComponent;
  let fixture: ComponentFixture<GenderEquityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderEquityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderEquityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
