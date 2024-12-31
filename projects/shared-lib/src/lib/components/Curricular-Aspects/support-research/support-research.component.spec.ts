import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportResearchComponent } from './support-research.component';

describe('SupportResearchComponent', () => {
  let component: SupportResearchComponent;
  let fixture: ComponentFixture<SupportResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
