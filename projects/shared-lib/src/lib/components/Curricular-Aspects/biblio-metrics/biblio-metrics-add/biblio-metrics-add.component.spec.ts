import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioMetricsAddComponent } from './biblio-metrics-add.component';

describe('BiblioMetricsAddComponent', () => {
  let component: BiblioMetricsAddComponent;
  let fixture: ComponentFixture<BiblioMetricsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiblioMetricsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiblioMetricsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
