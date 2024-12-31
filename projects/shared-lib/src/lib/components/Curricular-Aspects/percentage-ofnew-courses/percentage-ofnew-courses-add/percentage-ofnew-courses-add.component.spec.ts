import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageOfnewCoursesAddComponent } from './percentage-ofnew-courses-add.component';

describe('PercentageOfnewCoursesAddComponent', () => {
  let component: PercentageOfnewCoursesAddComponent;
  let fixture: ComponentFixture<PercentageOfnewCoursesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PercentageOfnewCoursesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PercentageOfnewCoursesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
