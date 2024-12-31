import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeFacultyViewComponent } from './fulltime-faculty-view.component';

describe('FulltimeFacultyViewComponent', () => {
  let component: FulltimeFacultyViewComponent;
  let fixture: ComponentFixture<FulltimeFacultyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulltimeFacultyViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulltimeFacultyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
