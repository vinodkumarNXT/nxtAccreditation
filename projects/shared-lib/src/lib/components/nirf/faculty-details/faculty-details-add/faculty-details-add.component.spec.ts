import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDetailsAddComponent } from './faculty-details-add.component';

describe('FacultyDetailsAddComponent', () => {
  let component: FacultyDetailsAddComponent;
  let fixture: ComponentFixture<FacultyDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDetailsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
