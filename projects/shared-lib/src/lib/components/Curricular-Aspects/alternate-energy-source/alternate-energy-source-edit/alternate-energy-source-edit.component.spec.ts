import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateEnergySourceEditComponent } from './alternate-energy-source-edit.component';

describe('AlternateEnergySourceEditComponent', () => {
  let component: AlternateEnergySourceEditComponent;
  let fixture: ComponentFixture<AlternateEnergySourceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternateEnergySourceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlternateEnergySourceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
