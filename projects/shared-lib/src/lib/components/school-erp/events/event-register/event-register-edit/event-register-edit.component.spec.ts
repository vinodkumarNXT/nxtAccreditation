import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegisterEditComponent } from './event-register-edit.component';

describe('EventRegisterEditComponent', () => {
  let component: EventRegisterEditComponent;
  let fixture: ComponentFixture<EventRegisterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventRegisterEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
