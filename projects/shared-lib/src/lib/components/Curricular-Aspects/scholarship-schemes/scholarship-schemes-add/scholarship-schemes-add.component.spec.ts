import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipSchemesAddComponent } from './scholarship-schemes-add.component';

describe('ScholarshipSchemesAddComponent', () => {
  let component: ScholarshipSchemesAddComponent;
  let fixture: ComponentFixture<ScholarshipSchemesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipSchemesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholarshipSchemesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
