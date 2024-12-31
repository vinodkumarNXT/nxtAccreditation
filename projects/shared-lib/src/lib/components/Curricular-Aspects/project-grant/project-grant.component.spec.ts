import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGrantComponent } from './project-grant.component';

describe('ProjectGrantComponent', () => {
  let component: ProjectGrantComponent;
  let fixture: ComponentFixture<ProjectGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGrantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
