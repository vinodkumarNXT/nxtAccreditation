import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipativeManagementAddComponent } from './participative-management-add.component';

describe('ParticipativeManagementAddComponent', () => {
  let component: ParticipativeManagementAddComponent;
  let fixture: ComponentFixture<ParticipativeManagementAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipativeManagementAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipativeManagementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
