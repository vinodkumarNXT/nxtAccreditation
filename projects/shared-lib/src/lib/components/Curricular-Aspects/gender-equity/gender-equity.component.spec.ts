import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEquityComponent } from './gender-equity.component';

describe('GenderEquityComponent', () => {
  let component: GenderEquityComponent;
  let fixture: ComponentFixture<GenderEquityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderEquityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
