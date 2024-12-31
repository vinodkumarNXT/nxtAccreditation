import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportResearchEditComponent } from './support-research-edit.component';

describe('SupportResearchEditComponent', () => {
  let component: SupportResearchEditComponent;
  let fixture: ComponentFixture<SupportResearchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportResearchEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportResearchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
