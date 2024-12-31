import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyonConsultancyEditComponent } from './policyon-consultancy-edit.component';

describe('PolicyonConsultancyEditComponent', () => {
  let component: PolicyonConsultancyEditComponent;
  let fixture: ComponentFixture<PolicyonConsultancyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyonConsultancyEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolicyonConsultancyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
