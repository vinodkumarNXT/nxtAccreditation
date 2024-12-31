import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingResearchEditComponent } from './funding-research-edit.component';

describe('FundingResearchEditComponent', () => {
  let component: FundingResearchEditComponent;
  let fixture: ComponentFixture<FundingResearchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingResearchEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundingResearchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
