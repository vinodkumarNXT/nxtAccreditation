import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSchemesComponent } from './scholarship-schemes.component';

describe('ScholarshipSchemesComponent', () => {
  let component: ScholarshipSchemesComponent;
  let fixture: ComponentFixture<ScholarshipSchemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipSchemesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
