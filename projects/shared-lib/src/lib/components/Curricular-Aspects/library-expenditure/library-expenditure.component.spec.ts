import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryExpenditureComponent } from './library-expenditure.component';

describe('LibraryExpenditureComponent', () => {
  let component: LibraryExpenditureComponent;
  let fixture: ComponentFixture<LibraryExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryExpenditureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibraryExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
