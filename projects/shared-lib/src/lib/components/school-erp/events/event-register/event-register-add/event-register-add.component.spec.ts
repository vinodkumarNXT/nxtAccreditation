import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegisterAddComponent } from './event-register-add.component';

describe('EventRegisterAddComponent', () => {
  let component: EventRegisterAddComponent;
  let fixture: ComponentFixture<EventRegisterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegisterAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRegisterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
