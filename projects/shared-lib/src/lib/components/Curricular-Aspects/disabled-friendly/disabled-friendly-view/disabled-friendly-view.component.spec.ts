import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFriendlyViewComponent } from './disabled-friendly-view.component';

describe('DisabledFriendlyViewComponent', () => {
  let component: DisabledFriendlyViewComponent;
  let fixture: ComponentFixture<DisabledFriendlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledFriendlyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisabledFriendlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
