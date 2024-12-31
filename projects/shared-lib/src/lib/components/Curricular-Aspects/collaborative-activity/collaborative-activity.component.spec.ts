import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeActivityComponent } from './collaborative-activity.component';

describe('CollaborativeActivityComponent', () => {
  let component: CollaborativeActivityComponent;
  let fixture: ComponentFixture<CollaborativeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborativeActivityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaborativeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
