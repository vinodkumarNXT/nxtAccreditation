import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeGovernanceViewComponent } from './administrative-governance-view.component';

describe('AdministrativeGovernanceViewComponent', () => {
  let component: AdministrativeGovernanceViewComponent;
  let fixture: ComponentFixture<AdministrativeGovernanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeGovernanceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeGovernanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
