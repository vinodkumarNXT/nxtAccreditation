import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioMetricsViewComponent } from './biblio-metrics-view.component';

describe('BiblioMetricsViewComponent', () => {
  let component: BiblioMetricsViewComponent;
  let fixture: ComponentFixture<BiblioMetricsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiblioMetricsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiblioMetricsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
