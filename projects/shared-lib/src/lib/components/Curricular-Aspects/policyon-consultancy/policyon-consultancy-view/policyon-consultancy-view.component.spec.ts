import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyonConsultancyViewComponent } from './policyon-consultancy-view.component';

describe('PolicyonConsultancyViewComponent', () => {
  let component: PolicyonConsultancyViewComponent;
  let fixture: ComponentFixture<PolicyonConsultancyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyonConsultancyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyonConsultancyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
