import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpAppAdminAddComponent } from './erp-app-admin-add.component';

describe('ErpAppAdminAddComponent', () => {
  let component: ErpAppAdminAddComponent;
  let fixture: ComponentFixture<ErpAppAdminAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpAppAdminAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpAppAdminAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
