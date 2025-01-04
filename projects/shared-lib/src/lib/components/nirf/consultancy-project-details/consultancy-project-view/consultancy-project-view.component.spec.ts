import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyProjectViewComponent } from './consultancy-project-view.component';

describe('ConsultancyProjectViewComponent', () => {
  let component: ConsultancyProjectViewComponent;
  let fixture: ComponentFixture<ConsultancyProjectViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultancyProjectViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyProjectViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
