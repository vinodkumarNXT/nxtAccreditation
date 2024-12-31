import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeFacultyEditComponent } from './fulltime-faculty-edit.component';

describe('FulltimeFacultyEditComponent', () => {
  let component: FulltimeFacultyEditComponent;
  let fixture: ComponentFixture<FulltimeFacultyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulltimeFacultyEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulltimeFacultyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
