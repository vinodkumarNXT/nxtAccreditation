import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentAuditAddComponent } from './environment-audit-add.component';

describe('EnvironmentAuditAddComponent', () => {
  let component: EnvironmentAuditAddComponent;
  let fixture: ComponentFixture<EnvironmentAuditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentAuditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvironmentAuditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
