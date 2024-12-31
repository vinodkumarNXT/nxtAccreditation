import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfnewCoursesEditComponent } from './percentage-ofnew-courses-edit.component';

describe('PercentageOfnewCoursesEditComponent', () => {
  let component: PercentageOfnewCoursesEditComponent;
  let fixture: ComponentFixture<PercentageOfnewCoursesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageOfnewCoursesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageOfnewCoursesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
