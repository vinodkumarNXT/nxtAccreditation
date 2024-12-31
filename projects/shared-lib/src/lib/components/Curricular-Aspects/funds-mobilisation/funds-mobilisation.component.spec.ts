import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsMobilisationComponent } from './funds-mobilisation.component';

describe('FundsMobilisationComponent', () => {
  let component: FundsMobilisationComponent;
  let fixture: ComponentFixture<FundsMobilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsMobilisationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundsMobilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
