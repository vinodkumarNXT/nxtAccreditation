import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedIntakeAddComponent } from './sanctioned-intake-add.component';

describe('SanctionedIntakeAddComponent', () => {
  let component: SanctionedIntakeAddComponent;
  let fixture: ComponentFixture<SanctionedIntakeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctionedIntakeAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanctionedIntakeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
