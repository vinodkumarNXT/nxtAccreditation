import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredResearchDetailsComponent } from './sponsored-research-details.component';

describe('SponsoredResearchDetailsComponent', () => {
  let component: SponsoredResearchDetailsComponent;
  let fixture: ComponentFixture<SponsoredResearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoredResearchDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsoredResearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
