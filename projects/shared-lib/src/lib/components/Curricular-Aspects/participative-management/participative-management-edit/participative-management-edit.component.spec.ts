import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipativeManagementEditComponent } from './participative-management-edit.component';

describe('ParticipativeManagementEditComponent', () => {
  let component: ParticipativeManagementEditComponent;
  let fixture: ComponentFixture<ParticipativeManagementEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipativeManagementEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipativeManagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
