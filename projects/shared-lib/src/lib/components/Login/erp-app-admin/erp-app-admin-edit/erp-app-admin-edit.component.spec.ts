import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpAppAdminEditComponent } from './erp-app-admin-edit.component';

describe('ErpAppAdminEditComponent', () => {
  let component: ErpAppAdminEditComponent;
  let fixture: ComponentFixture<ErpAppAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpAppAdminEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpAppAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
