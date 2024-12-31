import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateEnergySourceViewComponent } from './alternate-energy-source-view.component';

describe('AlternateEnergySourceViewComponent', () => {
  let component: AlternateEnergySourceViewComponent;
  let fixture: ComponentFixture<AlternateEnergySourceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateEnergySourceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternateEnergySourceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
