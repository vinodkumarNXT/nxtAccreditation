import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredResearchDetailsViewComponent } from './sponsored-research-details-view.component';

describe('SponsoredResearchDetailsViewComponent', () => {
  let component: SponsoredResearchDetailsViewComponent;
  let fixture: ComponentFixture<SponsoredResearchDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoredResearchDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsoredResearchDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
