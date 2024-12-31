import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltimeFacultyAddComponent } from './fulltime-faculty-add.component';

describe('FulltimeFacultyAddComponent', () => {
  let component: FulltimeFacultyAddComponent;
  let fixture: ComponentFixture<FulltimeFacultyAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FulltimeFacultyAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FulltimeFacultyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
