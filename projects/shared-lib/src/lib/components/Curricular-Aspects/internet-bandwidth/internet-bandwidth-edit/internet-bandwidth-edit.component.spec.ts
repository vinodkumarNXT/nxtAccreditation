import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBandwidthEditComponent } from './internet-bandwidth-edit.component';

describe('InternetBandwidthEditComponent', () => {
  let component: InternetBandwidthEditComponent;
  let fixture: ComponentFixture<InternetBandwidthEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetBandwidthEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternetBandwidthEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
