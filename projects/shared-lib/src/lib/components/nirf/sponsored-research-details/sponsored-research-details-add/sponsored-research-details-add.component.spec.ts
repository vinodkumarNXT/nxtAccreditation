import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredResearchDetailsAddComponent } from './sponsored-research-details-add.component';

describe('SponsoredResearchDetailsAddComponent', () => {
  let component: SponsoredResearchDetailsAddComponent;
  let fixture: ComponentFixture<SponsoredResearchDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoredResearchDetailsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsoredResearchDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
