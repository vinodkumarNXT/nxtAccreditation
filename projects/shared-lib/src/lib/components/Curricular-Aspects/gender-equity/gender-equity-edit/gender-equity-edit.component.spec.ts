import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderEquityEditComponent } from './gender-equity-edit.component';

describe('GenderEquityEditComponent', () => {
  let component: GenderEquityEditComponent;
  let fixture: ComponentFixture<GenderEquityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderEquityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenderEquityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
