import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGrantAddComponent } from './project-grant-add.component';

describe('ProjectGrantAddComponent', () => {
  let component: ProjectGrantAddComponent;
  let fixture: ComponentFixture<ProjectGrantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGrantAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectGrantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
