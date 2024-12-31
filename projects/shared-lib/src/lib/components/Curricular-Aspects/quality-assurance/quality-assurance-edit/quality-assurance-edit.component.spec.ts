import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceEditComponent } from './quality-assurance-edit.component';

describe('QualityAssuranceEditComponent', () => {
  let component: QualityAssuranceEditComponent;
  let fixture: ComponentFixture<QualityAssuranceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssuranceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityAssuranceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
