import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpMasterAdminLoginComponent } from './erp-master-admin-login.component';

describe('ErpMasterAdminLoginComponent', () => {
  let component: ErpMasterAdminLoginComponent;
  let fixture: ComponentFixture<ErpMasterAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpMasterAdminLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpMasterAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
