import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmentorRatioViewComponent } from './studentmentor-ratio-view.component';

describe('StudentmentorRatioViewComponent', () => {
  let component: StudentmentorRatioViewComponent;
  let fixture: ComponentFixture<StudentmentorRatioViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmentorRatioViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentmentorRatioViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
