import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrolePermissionComponent } from './addrole-permission.component';

describe('AddrolePermissionComponent', () => {
  let component: AddrolePermissionComponent;
  let fixture: ComponentFixture<AddrolePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddrolePermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddrolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
