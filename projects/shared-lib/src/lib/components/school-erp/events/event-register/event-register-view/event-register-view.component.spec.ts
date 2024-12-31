import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegisterViewComponent } from './event-register-view.component';

describe('EventRegisterViewComponent', () => {
  let component: EventRegisterViewComponent;
  let fixture: ComponentFixture<EventRegisterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegisterViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRegisterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
