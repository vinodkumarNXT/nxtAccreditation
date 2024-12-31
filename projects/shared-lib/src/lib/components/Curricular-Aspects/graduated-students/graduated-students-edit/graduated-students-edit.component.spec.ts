import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatedStudentsEditComponent } from './graduated-students-edit.component';

describe('GraduatedStudentsEditComponent', () => {
  let component: GraduatedStudentsEditComponent;
  let fixture: ComponentFixture<GraduatedStudentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduatedStudentsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduatedStudentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
