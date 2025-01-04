import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyProjectDetailsComponent } from './consultancy-project-details.component';

describe('ConsultancyProjectDetailsComponent', () => {
  let component: ConsultancyProjectDetailsComponent;
  let fixture: ComponentFixture<ConsultancyProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyProjectDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
