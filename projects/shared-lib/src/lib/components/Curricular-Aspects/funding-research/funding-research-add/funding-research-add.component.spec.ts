import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingResearchAddComponent } from './funding-research-add.component';

describe('FundingResearchAddComponent', () => {
  let component: FundingResearchAddComponent;
  let fixture: ComponentFixture<FundingResearchAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingResearchAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundingResearchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
