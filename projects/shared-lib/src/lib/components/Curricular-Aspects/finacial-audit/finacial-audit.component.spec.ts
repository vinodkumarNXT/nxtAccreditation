import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialAuditComponent } from './finacial-audit.component';

describe('FinacialAuditComponent', () => {
  let component: FinacialAuditComponent;
  let fixture: ComponentFixture<FinacialAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialAuditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
