import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledFriendlyAddComponent } from './disabled-friendly-add.component';

describe('DisabledFriendlyAddComponent', () => {
  let component: DisabledFriendlyAddComponent;
  let fixture: ComponentFixture<DisabledFriendlyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisabledFriendlyAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisabledFriendlyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
