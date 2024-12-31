import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMedalsComponent } from './students-medals.component';

describe('StudentsMedalsComponent', () => {
  let component: StudentsMedalsComponent;
  let fixture: ComponentFixture<StudentsMedalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsMedalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsMedalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
