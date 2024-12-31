import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimeTableEditComponent } from './class-time-table-edit.component';

describe('ClassTimeTableEditComponent', () => {
  let component: ClassTimeTableEditComponent;
  let fixture: ComponentFixture<ClassTimeTableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTimeTableEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassTimeTableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
