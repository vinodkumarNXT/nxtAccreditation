import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrolePermissionComponent } from './editrole-permission.component';

describe('EditrolePermissionComponent', () => {
  let component: EditrolePermissionComponent;
  let fixture: ComponentFixture<EditrolePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditrolePermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditrolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
