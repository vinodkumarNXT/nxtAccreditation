import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGovernanceViewComponent } from './e-governance-view.component';

describe('EGovernanceViewComponent', () => {
  let component: EGovernanceViewComponent;
  let fixture: ComponentFixture<EGovernanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EGovernanceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EGovernanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
