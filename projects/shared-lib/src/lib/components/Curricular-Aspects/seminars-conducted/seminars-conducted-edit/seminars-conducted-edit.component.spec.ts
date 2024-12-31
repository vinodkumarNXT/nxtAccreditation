import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsConductedEditComponent } from './seminars-conducted-edit.component';

describe('SeminarsConductedEditComponent', () => {
  let component: SeminarsConductedEditComponent;
  let fixture: ComponentFixture<SeminarsConductedEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminarsConductedEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeminarsConductedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
