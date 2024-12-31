import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpAppAdminComponent } from './erp-app-admin.component';

describe('ErpAppAdminComponent', () => {
  let component: ErpAppAdminComponent;
  let fixture: ComponentFixture<ErpAppAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpAppAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpAppAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
