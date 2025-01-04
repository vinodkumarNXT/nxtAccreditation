import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoredResearchDetailsEditComponent } from './sponsored-research-details-edit.component';

describe('SponsoredResearchDetailsEditComponent', () => {
  let component: SponsoredResearchDetailsEditComponent;
  let fixture: ComponentFixture<SponsoredResearchDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsoredResearchDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsoredResearchDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
