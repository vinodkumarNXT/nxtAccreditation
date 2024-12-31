import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreditationFooterComponent } from './accreditation-footer.component';

describe('AccreditationFooterComponent', () => {
  let component: AccreditationFooterComponent;
  let fixture: ComponentFixture<AccreditationFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccreditationFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccreditationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
