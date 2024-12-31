import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectsAddComponent } from './research-projects-add.component';

describe('ResearchProjectsAddComponent', () => {
  let component: ResearchProjectsAddComponent;
  let fixture: ComponentFixture<ResearchProjectsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchProjectsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchProjectsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
