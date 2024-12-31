import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfnewCoursesComponent } from './percentage-ofnew-courses.component';

describe('PercentageOfnewCoursesComponent', () => {
  let component: PercentageOfnewCoursesComponent;
  let fixture: ComponentFixture<PercentageOfnewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageOfnewCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageOfnewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
