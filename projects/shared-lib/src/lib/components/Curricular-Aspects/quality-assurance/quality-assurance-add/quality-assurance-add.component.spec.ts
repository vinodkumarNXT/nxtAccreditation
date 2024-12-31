import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityAssuranceAddComponent } from './quality-assurance-add.component';

describe('QualityAssuranceAddComponent', () => {
  let component: QualityAssuranceAddComponent;
  let fixture: ComponentFixture<QualityAssuranceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityAssuranceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualityAssuranceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
