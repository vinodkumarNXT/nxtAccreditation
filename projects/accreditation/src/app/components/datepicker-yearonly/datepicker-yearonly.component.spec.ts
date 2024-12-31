import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerYearonlyComponent } from './datepicker-yearonly.component';

describe('DatepickerYearonlyComponent', () => {
  let component: DatepickerYearonlyComponent;
  let fixture: ComponentFixture<DatepickerYearonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerYearonlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerYearonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
