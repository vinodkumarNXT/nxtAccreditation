import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkShiftViewComponent } from './work-shift-view.component';

describe('WorkShiftViewComponent', () => {
  let component: WorkShiftViewComponent;
  let fixture: ComponentFixture<WorkShiftViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkShiftViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkShiftViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
