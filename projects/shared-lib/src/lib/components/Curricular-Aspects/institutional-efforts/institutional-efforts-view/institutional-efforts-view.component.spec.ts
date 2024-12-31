import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalEffortsViewComponent } from './institutional-efforts-view.component';

describe('InstitutionalEffortsViewComponent', () => {
  let component: InstitutionalEffortsViewComponent;
  let fixture: ComponentFixture<InstitutionalEffortsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalEffortsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalEffortsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
