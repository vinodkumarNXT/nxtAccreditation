import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimeTableAddComponent } from './class-time-table-add.component';

describe('ClassTimeTableAddComponent', () => {
  let component: ClassTimeTableAddComponent;
  let fixture: ComponentFixture<ClassTimeTableAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTimeTableAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassTimeTableAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
