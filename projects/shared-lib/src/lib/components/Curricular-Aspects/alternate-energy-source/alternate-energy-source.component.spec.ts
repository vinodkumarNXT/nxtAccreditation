import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateEnergySourceComponent } from './alternate-energy-source.component';

describe('AlternateEnergySourceComponent', () => {
  let component: AlternateEnergySourceComponent;
  let fixture: ComponentFixture<AlternateEnergySourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateEnergySourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternateEnergySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
