import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryResourceEditComponent } from './library-resource-edit.component';

describe('LibraryResourceEditComponent', () => {
  let component: LibraryResourceEditComponent;
  let fixture: ComponentFixture<LibraryResourceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryResourceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryResourceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
