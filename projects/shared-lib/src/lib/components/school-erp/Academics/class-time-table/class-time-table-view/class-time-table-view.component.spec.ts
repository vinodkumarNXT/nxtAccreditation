import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTimeTableViewComponent } from './class-time-table-view.component';

describe('ClassTimeTableViewComponent', () => {
  let component: ClassTimeTableViewComponent;
  let fixture: ComponentFixture<ClassTimeTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTimeTableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassTimeTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
