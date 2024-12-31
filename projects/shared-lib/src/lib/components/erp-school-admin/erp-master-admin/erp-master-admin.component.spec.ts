import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpMasterAdminComponent } from './erp-master-admin.component';

describe('ErpMasterAdminComponent', () => {
  let component: ErpMasterAdminComponent;
  let fixture: ComponentFixture<ErpMasterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpMasterAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpMasterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
