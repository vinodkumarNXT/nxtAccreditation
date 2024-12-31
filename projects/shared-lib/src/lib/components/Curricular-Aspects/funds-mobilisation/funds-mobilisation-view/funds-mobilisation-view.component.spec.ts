import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsMobilisationViewComponent } from './funds-mobilisation-view.component';

describe('FundsMobilisationViewComponent', () => {
  let component: FundsMobilisationViewComponent;
  let fixture: ComponentFixture<FundsMobilisationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsMobilisationViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundsMobilisationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
