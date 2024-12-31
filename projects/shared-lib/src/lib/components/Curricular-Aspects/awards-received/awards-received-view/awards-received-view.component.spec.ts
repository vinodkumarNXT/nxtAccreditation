import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsReceivedViewComponent } from './awards-received-view.component';

describe('AwardsReceivedViewComponent', () => {
  let component: AwardsReceivedViewComponent;
  let fixture: ComponentFixture<AwardsReceivedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsReceivedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsReceivedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
