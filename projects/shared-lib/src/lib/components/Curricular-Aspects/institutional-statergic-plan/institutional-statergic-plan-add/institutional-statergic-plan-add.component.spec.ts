import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalStatergicPlanAddComponent } from './institutional-statergic-plan-add.component';

describe('InstitutionalStatergicPlanAddComponent', () => {
  let component: InstitutionalStatergicPlanAddComponent;
  let fixture: ComponentFixture<InstitutionalStatergicPlanAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalStatergicPlanAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalStatergicPlanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
