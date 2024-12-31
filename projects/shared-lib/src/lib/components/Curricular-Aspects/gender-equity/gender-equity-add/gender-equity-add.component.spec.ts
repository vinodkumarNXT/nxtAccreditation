import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEquityAddComponent } from './gender-equity-add.component';

describe('GenderEquityAddComponent', () => {
  let component: GenderEquityAddComponent;
  let fixture: ComponentFixture<GenderEquityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderEquityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderEquityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
