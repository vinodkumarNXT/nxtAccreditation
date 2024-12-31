import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMedalsViewComponent } from './students-medals-view.component';

describe('StudentsMedalsViewComponent', () => {
  let component: StudentsMedalsViewComponent;
  let fixture: ComponentFixture<StudentsMedalsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsMedalsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsMedalsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
