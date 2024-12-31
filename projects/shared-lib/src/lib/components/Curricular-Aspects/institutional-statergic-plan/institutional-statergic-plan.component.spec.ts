import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalStatergicPlanComponent } from './institutional-statergic-plan.component';

describe('InstitutionalStatergicPlanComponent', () => {
  let component: InstitutionalStatergicPlanComponent;
  let fixture: ComponentFixture<InstitutionalStatergicPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalStatergicPlanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalStatergicPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
