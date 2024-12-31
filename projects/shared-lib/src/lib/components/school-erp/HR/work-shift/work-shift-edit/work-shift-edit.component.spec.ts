import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftEditComponent } from './work-shift-edit.component';

describe('WorkShiftEditComponent', () => {
  let component: WorkShiftEditComponent;
  let fixture: ComponentFixture<WorkShiftEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkShiftEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkShiftEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
