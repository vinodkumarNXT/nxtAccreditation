import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaDashboardComponent } from './nba-dashboard.component';

describe('NbaDashboardComponent', () => {
  let component: NbaDashboardComponent;
  let fixture: ComponentFixture<NbaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
