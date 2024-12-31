import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeGovernanceComponent } from './administrative-governance.component';

describe('AdministrativeGovernanceComponent', () => {
  let component: AdministrativeGovernanceComponent;
  let fixture: ComponentFixture<AdministrativeGovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeGovernanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeGovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
