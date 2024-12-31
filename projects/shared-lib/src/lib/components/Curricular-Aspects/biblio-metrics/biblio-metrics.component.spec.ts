import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioMetricsComponent } from './biblio-metrics.component';

describe('BiblioMetricsComponent', () => {
  let component: BiblioMetricsComponent;
  let fixture: ComponentFixture<BiblioMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiblioMetricsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiblioMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
