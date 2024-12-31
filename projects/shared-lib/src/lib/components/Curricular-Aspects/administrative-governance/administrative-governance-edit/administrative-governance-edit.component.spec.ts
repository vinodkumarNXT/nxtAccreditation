import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeGovernanceEditComponent } from './administrative-governance-edit.component';

describe('AdministrativeGovernanceEditComponent', () => {
  let component: AdministrativeGovernanceEditComponent;
  let fixture: ComponentFixture<AdministrativeGovernanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrativeGovernanceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministrativeGovernanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
