import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalStatergicPlanEditComponent } from './institutional-statergic-plan-edit.component';

describe('InstitutionalStatergicPlanEditComponent', () => {
  let component: InstitutionalStatergicPlanEditComponent;
  let fixture: ComponentFixture<InstitutionalStatergicPlanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalStatergicPlanEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalStatergicPlanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
