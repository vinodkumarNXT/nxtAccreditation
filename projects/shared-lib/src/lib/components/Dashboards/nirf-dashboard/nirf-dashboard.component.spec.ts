import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NirfDashboardComponent } from './nirf-dashboard.component';

describe('NirfDashboardComponent', () => {
  let component: NirfDashboardComponent;
  let fixture: ComponentFixture<NirfDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NirfDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NirfDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
