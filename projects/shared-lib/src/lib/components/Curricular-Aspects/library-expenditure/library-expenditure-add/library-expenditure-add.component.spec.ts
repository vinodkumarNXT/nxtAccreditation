import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryExpenditureAddComponent } from './library-expenditure-add.component';

describe('LibraryExpenditureAddComponent', () => {
  let component: LibraryExpenditureAddComponent;
  let fixture: ComponentFixture<LibraryExpenditureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryExpenditureAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryExpenditureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
