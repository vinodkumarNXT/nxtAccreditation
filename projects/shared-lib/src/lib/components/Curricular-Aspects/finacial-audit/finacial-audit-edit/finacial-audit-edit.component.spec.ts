import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialAuditEditComponent } from './finacial-audit-edit.component';

describe('FinacialAuditEditComponent', () => {
  let component: FinacialAuditEditComponent;
  let fixture: ComponentFixture<FinacialAuditEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinacialAuditEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinacialAuditEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
