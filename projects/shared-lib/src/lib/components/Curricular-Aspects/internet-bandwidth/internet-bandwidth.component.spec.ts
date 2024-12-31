import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBandwidthComponent } from './internet-bandwidth.component';

describe('InternetBandwidthComponent', () => {
  let component: InternetBandwidthComponent;
  let fixture: ComponentFixture<InternetBandwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetBandwidthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternetBandwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
