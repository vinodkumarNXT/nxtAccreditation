import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGovernanceComponent } from './e-governance.component';

describe('EGovernanceComponent', () => {
  let component: EGovernanceComponent;
  let fixture: ComponentFixture<EGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EGovernanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
