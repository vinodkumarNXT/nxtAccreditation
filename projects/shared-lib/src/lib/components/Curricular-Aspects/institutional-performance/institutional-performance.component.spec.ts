import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalPerformanceComponent } from './institutional-performance.component';

describe('InstitutionalPerformanceComponent', () => {
  let component: InstitutionalPerformanceComponent;
  let fixture: ComponentFixture<InstitutionalPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
