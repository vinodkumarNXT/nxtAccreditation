import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGovernanceAddComponent } from './e-governance-add.component';

describe('EGovernanceAddComponent', () => {
  let component: EGovernanceAddComponent;
  let fixture: ComponentFixture<EGovernanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EGovernanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EGovernanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
