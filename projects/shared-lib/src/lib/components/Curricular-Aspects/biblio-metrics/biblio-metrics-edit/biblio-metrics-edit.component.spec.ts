import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblioMetricsEditComponent } from './biblio-metrics-edit.component';

describe('BiblioMetricsEditComponent', () => {
  let component: BiblioMetricsEditComponent;
  let fixture: ComponentFixture<BiblioMetricsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiblioMetricsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiblioMetricsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
