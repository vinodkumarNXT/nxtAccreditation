import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryResourceComponent } from './library-resource.component';

describe('LibraryResourceComponent', () => {
  let component: LibraryResourceComponent;
  let fixture: ComponentFixture<LibraryResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
