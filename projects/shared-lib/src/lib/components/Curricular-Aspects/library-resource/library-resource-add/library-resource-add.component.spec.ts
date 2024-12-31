import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryResourceAddComponent } from './library-resource-add.component';

describe('LibraryResourceAddComponent', () => {
  let component: LibraryResourceAddComponent;
  let fixture: ComponentFixture<LibraryResourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryResourceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryResourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
