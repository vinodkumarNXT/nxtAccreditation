import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFriendlyEditComponent } from './disabled-friendly-edit.component';

describe('DisabledFriendlyEditComponent', () => {
  let component: DisabledFriendlyEditComponent;
  let fixture: ComponentFixture<DisabledFriendlyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledFriendlyEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisabledFriendlyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
