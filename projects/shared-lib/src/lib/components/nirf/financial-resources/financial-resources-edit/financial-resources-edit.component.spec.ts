import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialResourcesEditComponent } from './financial-resources-edit.component';

describe('FinancialResourcesEditComponent', () => {
  let component: FinancialResourcesEditComponent;
  let fixture: ComponentFixture<FinancialResourcesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialResourcesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialResourcesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
