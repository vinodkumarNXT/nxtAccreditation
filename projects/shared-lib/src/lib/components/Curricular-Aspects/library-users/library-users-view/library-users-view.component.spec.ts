import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUsersViewComponent } from './library-users-view.component';

describe('LibraryUsersViewComponent', () => {
  let component: LibraryUsersViewComponent;
  let fixture: ComponentFixture<LibraryUsersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryUsersViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
