import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatedStudentsViewComponent } from './graduated-students-view.component';

describe('GraduatedStudentsViewComponent', () => {
  let component: GraduatedStudentsViewComponent;
  let fixture: ComponentFixture<GraduatedStudentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduatedStudentsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraduatedStudentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
