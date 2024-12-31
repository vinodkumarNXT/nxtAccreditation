import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBandwidthViewComponent } from './internet-bandwidth-view.component';

describe('InternetBandwidthViewComponent', () => {
  let component: InternetBandwidthViewComponent;
  let fixture: ComponentFixture<InternetBandwidthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetBandwidthViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternetBandwidthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
