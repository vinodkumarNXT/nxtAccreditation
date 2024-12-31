import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypeViewComponent } from './event-type-view.component';

describe('EventTypeViewComponent', () => {
  let component: EventTypeViewComponent;
  let fixture: ComponentFixture<EventTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTypeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
