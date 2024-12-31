import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryUsersAddComponent } from './library-users-add.component';

describe('LibraryUsersAddComponent', () => {
  let component: LibraryUsersAddComponent;
  let fixture: ComponentFixture<LibraryUsersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryUsersAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryUsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
