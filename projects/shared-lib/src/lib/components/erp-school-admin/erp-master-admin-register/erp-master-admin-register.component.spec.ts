import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpMasterAdminRegisterComponent } from './erp-master-admin-register.component';

describe('ErpMasterAdminRegisterComponent', () => {
  let component: ErpMasterAdminRegisterComponent;
  let fixture: ComponentFixture<ErpMasterAdminRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpMasterAdminRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpMasterAdminRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
