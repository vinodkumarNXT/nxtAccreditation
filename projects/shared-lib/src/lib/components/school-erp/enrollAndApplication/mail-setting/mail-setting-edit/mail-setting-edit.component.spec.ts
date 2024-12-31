import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSettingEditComponent } from './mail-setting-edit.component';

describe('MailSettingEditComponent', () => {
  let component: MailSettingEditComponent;
  let fixture: ComponentFixture<MailSettingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSettingEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailSettingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
