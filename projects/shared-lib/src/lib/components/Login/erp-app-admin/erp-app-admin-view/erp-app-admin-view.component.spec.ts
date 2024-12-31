import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpAppAdminViewComponent } from './erp-app-admin-view.component';

describe('ErpAppAdminViewComponent', () => {
  let component: ErpAppAdminViewComponent;
  let fixture: ComponentFixture<ErpAppAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErpAppAdminViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErpAppAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
