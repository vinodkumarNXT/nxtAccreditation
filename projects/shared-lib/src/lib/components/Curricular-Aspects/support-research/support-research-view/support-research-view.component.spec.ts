import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportResearchViewComponent } from './support-research-view.component';

describe('SupportResearchViewComponent', () => {
  let component: SupportResearchViewComponent;
  let fixture: ComponentFixture<SupportResearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportResearchViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportResearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
