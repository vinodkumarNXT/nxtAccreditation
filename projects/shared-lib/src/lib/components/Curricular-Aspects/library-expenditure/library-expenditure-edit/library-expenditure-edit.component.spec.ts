import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryExpenditureEditComponent } from './library-expenditure-edit.component';

describe('LibraryExpenditureEditComponent', () => {
  let component: LibraryExpenditureEditComponent;
  let fixture: ComponentFixture<LibraryExpenditureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryExpenditureEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryExpenditureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
