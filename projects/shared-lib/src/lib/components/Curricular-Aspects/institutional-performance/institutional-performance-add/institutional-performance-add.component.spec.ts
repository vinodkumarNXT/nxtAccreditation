import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalPerformanceAddComponent } from './institutional-performance-add.component';

describe('InstitutionalPerformanceAddComponent', () => {
  let component: InstitutionalPerformanceAddComponent;
  let fixture: ComponentFixture<InstitutionalPerformanceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalPerformanceAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalPerformanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
