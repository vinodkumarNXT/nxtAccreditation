import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeTeachersAddComponent } from './full-time-teachers-add.component';

describe('FullTimeTeachersAddComponent', () => {
  let component: FullTimeTeachersAddComponent;
  let fixture: ComponentFixture<FullTimeTeachersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTimeTeachersAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullTimeTeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
