import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipativeManagementComponent } from './participative-management.component';

describe('ParticipativeManagementComponent', () => {
  let component: ParticipativeManagementComponent;
  let fixture: ComponentFixture<ParticipativeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipativeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipativeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
