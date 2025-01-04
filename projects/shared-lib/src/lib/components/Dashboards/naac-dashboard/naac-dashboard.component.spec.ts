import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaacDashboardComponent } from './naac-dashboard.component';

describe('NaacDashboardComponent', () => {
  let component: NaacDashboardComponent;
  let fixture: ComponentFixture<NaacDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaacDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaacDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
