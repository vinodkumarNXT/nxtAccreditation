import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialResourcesAddComponent } from './financial-resources-add.component';

describe('FinancialResourcesAddComponent', () => {
  let component: FinancialResourcesAddComponent;
  let fixture: ComponentFixture<FinancialResourcesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialResourcesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialResourcesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
