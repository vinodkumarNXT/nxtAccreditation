import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentAuditViewComponent } from './environment-audit-view.component';

describe('EnvironmentAuditViewComponent', () => {
  let component: EnvironmentAuditViewComponent;
  let fixture: ComponentFixture<EnvironmentAuditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvironmentAuditViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnvironmentAuditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
