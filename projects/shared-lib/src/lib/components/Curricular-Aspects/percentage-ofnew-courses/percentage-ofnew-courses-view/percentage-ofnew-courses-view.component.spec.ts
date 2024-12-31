import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfnewCoursesViewComponent } from './percentage-ofnew-courses-view.component';

describe('PercentageOfnewCoursesViewComponent', () => {
  let component: PercentageOfnewCoursesViewComponent;
  let fixture: ComponentFixture<PercentageOfnewCoursesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageOfnewCoursesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageOfnewCoursesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
