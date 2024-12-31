import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSettingAddComponent } from './mail-setting-add.component';

describe('MailSettingAddComponent', () => {
  let component: MailSettingAddComponent;
  let fixture: ComponentFixture<MailSettingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSettingAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailSettingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
