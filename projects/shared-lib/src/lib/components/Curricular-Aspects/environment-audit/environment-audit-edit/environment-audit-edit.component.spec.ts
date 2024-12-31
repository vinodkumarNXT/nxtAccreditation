import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentAuditEditComponent } from './environment-audit-edit.component';

describe('EnvironmentAuditEditComponent', () => {
  let component: EnvironmentAuditEditComponent;
  let fixture: ComponentFixture<EnvironmentAuditEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentAuditEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvironmentAuditEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
