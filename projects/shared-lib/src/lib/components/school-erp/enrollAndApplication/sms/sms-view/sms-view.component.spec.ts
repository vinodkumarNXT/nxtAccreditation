import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsViewComponent } from './sms-view.component';

describe('SmsViewComponent', () => {
  let component: SmsViewComponent;
  let fixture: ComponentFixture<SmsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
