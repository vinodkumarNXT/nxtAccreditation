import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccForgotpasswordComponent } from './acc-forgotpassword.component';

describe('AccForgotpasswordComponent', () => {
  let component: AccForgotpasswordComponent;
  let fixture: ComponentFixture<AccForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccForgotpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
