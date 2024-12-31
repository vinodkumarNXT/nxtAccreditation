import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSchemesEditComponent } from './scholarship-schemes-edit.component';

describe('ScholarshipSchemesEditComponent', () => {
  let component: ScholarshipSchemesEditComponent;
  let fixture: ComponentFixture<ScholarshipSchemesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipSchemesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipSchemesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
