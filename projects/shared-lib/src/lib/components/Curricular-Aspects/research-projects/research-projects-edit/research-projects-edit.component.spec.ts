import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectsEditComponent } from './research-projects-edit.component';

describe('ResearchProjectsEditComponent', () => {
  let component: ResearchProjectsEditComponent;
  let fixture: ComponentFixture<ResearchProjectsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchProjectsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchProjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
