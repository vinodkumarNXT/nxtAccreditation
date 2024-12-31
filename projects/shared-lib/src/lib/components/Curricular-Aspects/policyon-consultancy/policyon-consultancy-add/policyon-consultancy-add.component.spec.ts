import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyonConsultancyAddComponent } from './policyon-consultancy-add.component';

describe('PolicyonConsultancyAddComponent', () => {
  let component: PolicyonConsultancyAddComponent;
  let fixture: ComponentFixture<PolicyonConsultancyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyonConsultancyAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyonConsultancyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
