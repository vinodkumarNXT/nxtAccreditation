import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborativeActivityViewComponent } from './collaborative-activity-view.component';

describe('CollaborativeActivityViewComponent', () => {
  let component: CollaborativeActivityViewComponent;
  let fixture: ComponentFixture<CollaborativeActivityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborativeActivityViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollaborativeActivityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
