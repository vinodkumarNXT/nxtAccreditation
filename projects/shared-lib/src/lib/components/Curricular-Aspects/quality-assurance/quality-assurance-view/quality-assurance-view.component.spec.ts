import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceViewComponent } from './quality-assurance-view.component';

describe('QualityAssuranceViewComponent', () => {
  let component: QualityAssuranceViewComponent;
  let fixture: ComponentFixture<QualityAssuranceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssuranceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityAssuranceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
