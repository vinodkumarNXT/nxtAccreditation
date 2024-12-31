import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsMobilisationEditComponent } from './funds-mobilisation-edit.component';

describe('FundsMobilisationEditComponent', () => {
  let component: FundsMobilisationEditComponent;
  let fixture: ComponentFixture<FundsMobilisationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsMobilisationEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundsMobilisationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
