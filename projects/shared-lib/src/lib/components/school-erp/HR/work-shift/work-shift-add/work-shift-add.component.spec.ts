import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftAddComponent } from './work-shift-add.component';

describe('WorkShiftAddComponent', () => {
  let component: WorkShiftAddComponent;
  let fixture: ComponentFixture<WorkShiftAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkShiftAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkShiftAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
