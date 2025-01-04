import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDetailsViewComponent } from './faculty-details-view.component';

describe('FacultyDetailsViewComponent', () => {
  let component: FacultyDetailsViewComponent;
  let fixture: ComponentFixture<FacultyDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDetailsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
