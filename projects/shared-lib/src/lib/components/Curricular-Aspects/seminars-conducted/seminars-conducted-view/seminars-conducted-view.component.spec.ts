import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsConductedViewComponent } from './seminars-conducted-view.component';

describe('SeminarsConductedViewComponent', () => {
  let component: SeminarsConductedViewComponent;
  let fixture: ComponentFixture<SeminarsConductedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminarsConductedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeminarsConductedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
