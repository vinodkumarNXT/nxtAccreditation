import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsReceivedComponent } from './awards-received.component';

describe('AwardsReceivedComponent', () => {
  let component: AwardsReceivedComponent;
  let fixture: ComponentFixture<AwardsReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsReceivedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwardsReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
