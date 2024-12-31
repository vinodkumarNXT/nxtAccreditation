import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsConductedAddComponent } from './seminars-conducted-add.component';

describe('SeminarsConductedAddComponent', () => {
  let component: SeminarsConductedAddComponent;
  let fixture: ComponentFixture<SeminarsConductedAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminarsConductedAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeminarsConductedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
