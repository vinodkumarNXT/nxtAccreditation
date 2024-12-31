import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryResourceViewComponent } from './library-resource-view.component';

describe('LibraryResourceViewComponent', () => {
  let component: LibraryResourceViewComponent;
  let fixture: ComponentFixture<LibraryResourceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryResourceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryResourceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
