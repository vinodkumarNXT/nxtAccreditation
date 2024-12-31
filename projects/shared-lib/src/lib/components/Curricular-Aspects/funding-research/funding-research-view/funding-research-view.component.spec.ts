import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingResearchViewComponent } from './funding-research-view.component';

describe('FundingResearchViewComponent', () => {
  let component: FundingResearchViewComponent;
  let fixture: ComponentFixture<FundingResearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingResearchViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundingResearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
