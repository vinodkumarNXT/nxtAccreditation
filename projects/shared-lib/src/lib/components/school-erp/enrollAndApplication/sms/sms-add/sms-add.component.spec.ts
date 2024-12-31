import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsAddComponent } from './sms-add.component';

describe('SmsAddComponent', () => {
  let component: SmsAddComponent;
  let fixture: ComponentFixture<SmsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
