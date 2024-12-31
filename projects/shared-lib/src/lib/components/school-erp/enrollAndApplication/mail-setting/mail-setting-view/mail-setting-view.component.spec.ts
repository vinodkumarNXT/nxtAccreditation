import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSettingViewComponent } from './mail-setting-view.component';

describe('MailSettingViewComponent', () => {
  let component: MailSettingViewComponent;
  let fixture: ComponentFixture<MailSettingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSettingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailSettingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
