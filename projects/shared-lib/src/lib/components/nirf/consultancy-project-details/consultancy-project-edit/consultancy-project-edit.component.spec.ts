import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyProjectEditComponent } from './consultancy-project-edit.component';

describe('ConsultancyProjectEditComponent', () => {
  let component: ConsultancyProjectEditComponent;
  let fixture: ComponentFixture<ConsultancyProjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyProjectEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
