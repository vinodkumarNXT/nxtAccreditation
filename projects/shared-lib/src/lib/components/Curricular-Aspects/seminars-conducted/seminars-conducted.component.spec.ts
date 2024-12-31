import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsConductedComponent } from './seminars-conducted.component';

describe('SeminarsConductedComponent', () => {
  let component: SeminarsConductedComponent;
  let fixture: ComponentFixture<SeminarsConductedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminarsConductedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeminarsConductedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
