import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentAuditComponent } from './environment-audit.component';

describe('EnvironmentAuditComponent', () => {
  let component: EnvironmentAuditComponent;
  let fixture: ComponentFixture<EnvironmentAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentAuditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvironmentAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
