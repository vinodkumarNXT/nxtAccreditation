import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetBandwidthAddComponent } from './internet-bandwidth-add.component';

describe('InternetBandwidthAddComponent', () => {
  let component: InternetBandwidthAddComponent;
  let fixture: ComponentFixture<InternetBandwidthAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetBandwidthAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternetBandwidthAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
