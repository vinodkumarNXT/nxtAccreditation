import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeTeachersComponent } from './full-time-teachers.component';

describe('FullTimeTeachersComponent', () => {
  let component: FullTimeTeachersComponent;
  let fixture: ComponentFixture<FullTimeTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTimeTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullTimeTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
