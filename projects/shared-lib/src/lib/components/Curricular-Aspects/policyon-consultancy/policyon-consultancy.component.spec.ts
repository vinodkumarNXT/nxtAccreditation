import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyonConsultancyComponent } from './policyon-consultancy.component';

describe('PolicyonConsultancyComponent', () => {
  let component: PolicyonConsultancyComponent;
  let fixture: ComponentFixture<PolicyonConsultancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyonConsultancyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyonConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
