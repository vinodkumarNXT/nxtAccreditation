import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeFacultyComponent } from './fulltime-faculty.component';

describe('FulltimeFacultyComponent', () => {
  let component: FulltimeFacultyComponent;
  let fixture: ComponentFixture<FulltimeFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulltimeFacultyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulltimeFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
