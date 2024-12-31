import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmentorRatioComponent } from './studentmentor-ratio.component';

describe('StudentmentorRatioComponent', () => {
  let component: StudentmentorRatioComponent;
  let fixture: ComponentFixture<StudentmentorRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmentorRatioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentmentorRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
