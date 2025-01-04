import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDetailsComponent } from './faculty-details.component';

describe('FacultyDetailsComponent', () => {
  let component: FacultyDetailsComponent;
  let fixture: ComponentFixture<FacultyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
