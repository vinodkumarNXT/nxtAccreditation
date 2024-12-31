import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalStatergicPlanViewComponent } from './institutional-statergic-plan-view.component';

describe('InstitutionalStatergicPlanViewComponent', () => {
  let component: InstitutionalStatergicPlanViewComponent;
  let fixture: ComponentFixture<InstitutionalStatergicPlanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalStatergicPlanViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalStatergicPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
