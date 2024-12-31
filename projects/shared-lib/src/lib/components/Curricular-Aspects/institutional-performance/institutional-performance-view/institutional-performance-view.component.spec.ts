import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalPerformanceViewComponent } from './institutional-performance-view.component';

describe('InstitutionalPerformanceViewComponent', () => {
  let component: InstitutionalPerformanceViewComponent;
  let fixture: ComponentFixture<InstitutionalPerformanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalPerformanceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalPerformanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
