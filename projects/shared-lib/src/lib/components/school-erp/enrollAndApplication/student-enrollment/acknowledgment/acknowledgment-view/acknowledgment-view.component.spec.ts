import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgmentViewComponent } from './acknowledgment-view.component';

describe('AcknowledgmentViewComponent', () => {
  let component: AcknowledgmentViewComponent;
  let fixture: ComponentFixture<AcknowledgmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgmentViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcknowledgmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
