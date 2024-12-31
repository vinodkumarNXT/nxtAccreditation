import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalPerformanceEditComponent } from './institutional-performance-edit.component';

describe('InstitutionalPerformanceEditComponent', () => {
  let component: InstitutionalPerformanceEditComponent;
  let fixture: ComponentFixture<InstitutionalPerformanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalPerformanceEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalPerformanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
