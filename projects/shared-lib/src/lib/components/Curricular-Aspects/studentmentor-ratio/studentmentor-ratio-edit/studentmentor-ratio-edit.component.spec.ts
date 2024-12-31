import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmentorRatioEditComponent } from './studentmentor-ratio-edit.component';

describe('StudentmentorRatioEditComponent', () => {
  let component: StudentmentorRatioEditComponent;
  let fixture: ComponentFixture<StudentmentorRatioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmentorRatioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentmentorRatioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
