import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeActivityEditComponent } from './collaborative-activity-edit.component';

describe('CollaborativeActivityEditComponent', () => {
  let component: CollaborativeActivityEditComponent;
  let fixture: ComponentFixture<CollaborativeActivityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborativeActivityEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaborativeActivityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
