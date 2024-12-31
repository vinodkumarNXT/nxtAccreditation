import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUsersEditComponent } from './library-users-edit.component';

describe('LibraryUsersEditComponent', () => {
  let component: LibraryUsersEditComponent;
  let fixture: ComponentFixture<LibraryUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryUsersEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
