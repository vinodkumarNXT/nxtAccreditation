import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateEnergySourceAddComponent } from './alternate-energy-source-add.component';

describe('AlternateEnergySourceAddComponent', () => {
  let component: AlternateEnergySourceAddComponent;
  let fixture: ComponentFixture<AlternateEnergySourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateEnergySourceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternateEnergySourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
