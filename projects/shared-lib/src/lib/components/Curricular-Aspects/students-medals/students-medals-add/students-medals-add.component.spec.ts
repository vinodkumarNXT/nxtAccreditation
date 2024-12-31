import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMedalsAddComponent } from './students-medals-add.component';

describe('StudentsMedalsAddComponent', () => {
  let component: StudentsMedalsAddComponent;
  let fixture: ComponentFixture<StudentsMedalsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsMedalsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsMedalsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
