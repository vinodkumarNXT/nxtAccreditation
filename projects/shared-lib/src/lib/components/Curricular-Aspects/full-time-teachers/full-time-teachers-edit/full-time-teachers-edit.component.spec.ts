import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimeTeachersEditComponent } from './full-time-teachers-edit.component';

describe('FullTimeTeachersEditComponent', () => {
  let component: FullTimeTeachersEditComponent;
  let fixture: ComponentFixture<FullTimeTeachersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTimeTeachersEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullTimeTeachersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
