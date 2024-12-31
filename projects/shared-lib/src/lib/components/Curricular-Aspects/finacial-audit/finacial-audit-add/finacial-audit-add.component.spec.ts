import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialAuditAddComponent } from './finacial-audit-add.component';

describe('FinacialAuditAddComponent', () => {
  let component: FinacialAuditAddComponent;
  let fixture: ComponentFixture<FinacialAuditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialAuditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialAuditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
