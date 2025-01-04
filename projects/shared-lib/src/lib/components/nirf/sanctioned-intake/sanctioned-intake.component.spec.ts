import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedIntakeComponent } from './sanctioned-intake.component';

describe('SanctionedIntakeComponent', () => {
  let component: SanctionedIntakeComponent;
  let fixture: ComponentFixture<SanctionedIntakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctionedIntakeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanctionedIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
