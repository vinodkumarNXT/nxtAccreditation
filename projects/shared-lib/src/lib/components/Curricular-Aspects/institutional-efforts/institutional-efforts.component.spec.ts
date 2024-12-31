import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalEffortsComponent } from './institutional-efforts.component';

describe('InstitutionalEffortsComponent', () => {
  let component: InstitutionalEffortsComponent;
  let fixture: ComponentFixture<InstitutionalEffortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalEffortsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
