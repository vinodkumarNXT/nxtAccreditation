import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDetailsEditComponent } from './faculty-details-edit.component';

describe('FacultyDetailsEditComponent', () => {
  let component: FacultyDetailsEditComponent;
  let fixture: ComponentFixture<FacultyDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
