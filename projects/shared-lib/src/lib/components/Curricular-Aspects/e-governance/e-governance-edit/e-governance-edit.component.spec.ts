import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGovernanceEditComponent } from './e-governance-edit.component';

describe('EGovernanceEditComponent', () => {
  let component: EGovernanceEditComponent;
  let fixture: ComponentFixture<EGovernanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EGovernanceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EGovernanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
