import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeActivityAddComponent } from './collaborative-activity-add.component';

describe('CollaborativeActivityAddComponent', () => {
  let component: CollaborativeActivityAddComponent;
  let fixture: ComponentFixture<CollaborativeActivityAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborativeActivityAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaborativeActivityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
