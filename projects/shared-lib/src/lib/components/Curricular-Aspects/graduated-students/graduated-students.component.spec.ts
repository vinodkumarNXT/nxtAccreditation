import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatedStudentsComponent } from './graduated-students.component';

describe('GraduatedStudentsComponent', () => {
  let component: GraduatedStudentsComponent;
  let fixture: ComponentFixture<GraduatedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduatedStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduatedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
