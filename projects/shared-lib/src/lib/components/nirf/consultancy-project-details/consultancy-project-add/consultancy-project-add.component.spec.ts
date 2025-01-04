import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyProjectAddComponent } from './consultancy-project-add.component';

describe('ConsultancyProjectAddComponent', () => {
  let component: ConsultancyProjectAddComponent;
  let fixture: ComponentFixture<ConsultancyProjectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyProjectAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyProjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
