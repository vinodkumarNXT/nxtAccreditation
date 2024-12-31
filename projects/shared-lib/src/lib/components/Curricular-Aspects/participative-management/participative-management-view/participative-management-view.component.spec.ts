import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipativeManagementViewComponent } from './participative-management-view.component';

describe('ParticipativeManagementViewComponent', () => {
  let component: ParticipativeManagementViewComponent;
  let fixture: ComponentFixture<ParticipativeManagementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipativeManagementViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipativeManagementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
