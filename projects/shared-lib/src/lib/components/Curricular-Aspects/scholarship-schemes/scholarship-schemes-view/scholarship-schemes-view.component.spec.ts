import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSchemesViewComponent } from './scholarship-schemes-view.component';

describe('ScholarshipSchemesViewComponent', () => {
  let component: ScholarshipSchemesViewComponent;
  let fixture: ComponentFixture<ScholarshipSchemesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipSchemesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipSchemesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
