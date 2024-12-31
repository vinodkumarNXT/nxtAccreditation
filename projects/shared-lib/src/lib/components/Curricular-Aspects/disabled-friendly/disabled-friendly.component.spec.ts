import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFriendlyComponent } from './disabled-friendly.component';

describe('DisabledFriendlyComponent', () => {
  let component: DisabledFriendlyComponent;
  let fixture: ComponentFixture<DisabledFriendlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledFriendlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisabledFriendlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
