import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeGovernanceAddComponent } from './administrative-governance-add.component';

describe('AdministrativeGovernanceAddComponent', () => {
  let component: AdministrativeGovernanceAddComponent;
  let fixture: ComponentFixture<AdministrativeGovernanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeGovernanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeGovernanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
