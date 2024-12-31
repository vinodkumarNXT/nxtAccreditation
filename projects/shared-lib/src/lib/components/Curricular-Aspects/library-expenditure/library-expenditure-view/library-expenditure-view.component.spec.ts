import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryExpenditureViewComponent } from './library-expenditure-view.component';

describe('LibraryExpenditureViewComponent', () => {
  let component: LibraryExpenditureViewComponent;
  let fixture: ComponentFixture<LibraryExpenditureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryExpenditureViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryExpenditureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
