import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatedStudentsAddComponent } from './graduated-students-add.component';

describe('GraduatedStudentsAddComponent', () => {
  let component: GraduatedStudentsAddComponent;
  let fixture: ComponentFixture<GraduatedStudentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduatedStudentsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduatedStudentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
