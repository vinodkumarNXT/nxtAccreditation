import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingResearchComponent } from './funding-research.component';

describe('FundingResearchComponent', () => {
  let component: FundingResearchComponent;
  let fixture: ComponentFixture<FundingResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundingResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
