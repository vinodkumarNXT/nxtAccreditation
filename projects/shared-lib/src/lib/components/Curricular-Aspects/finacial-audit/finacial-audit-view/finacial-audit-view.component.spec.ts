import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialAuditViewComponent } from './finacial-audit-view.component';

describe('FinacialAuditViewComponent', () => {
  let component: FinacialAuditViewComponent;
  let fixture: ComponentFixture<FinacialAuditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialAuditViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialAuditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
