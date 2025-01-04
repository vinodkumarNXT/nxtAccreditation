import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialResourcesViewComponent } from './financial-resources-view.component';

describe('FinancialResourcesViewComponent', () => {
  let component: FinancialResourcesViewComponent;
  let fixture: ComponentFixture<FinancialResourcesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialResourcesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialResourcesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
