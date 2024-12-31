import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsEditComponent } from './sms-edit.component';

describe('SmsEditComponent', () => {
  let component: SmsEditComponent;
  let fixture: ComponentFixture<SmsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
