import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMedalsEditComponent } from './students-medals-edit.component';

describe('StudentsMedalsEditComponent', () => {
  let component: StudentsMedalsEditComponent;
  let fixture: ComponentFixture<StudentsMedalsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsMedalsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsMedalsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
