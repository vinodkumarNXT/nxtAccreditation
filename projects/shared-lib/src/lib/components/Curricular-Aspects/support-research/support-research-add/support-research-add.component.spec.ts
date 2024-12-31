import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportResearchAddComponent } from './support-research-add.component';

describe('SupportResearchAddComponent', () => {
  let component: SupportResearchAddComponent;
  let fixture: ComponentFixture<SupportResearchAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportResearchAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportResearchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
