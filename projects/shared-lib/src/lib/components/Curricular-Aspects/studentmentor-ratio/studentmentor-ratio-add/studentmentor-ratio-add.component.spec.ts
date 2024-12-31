import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmentorRatioAddComponent } from './studentmentor-ratio-add.component';

describe('StudentmentorRatioAddComponent', () => {
  let component: StudentmentorRatioAddComponent;
  let fixture: ComponentFixture<StudentmentorRatioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmentorRatioAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentmentorRatioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
