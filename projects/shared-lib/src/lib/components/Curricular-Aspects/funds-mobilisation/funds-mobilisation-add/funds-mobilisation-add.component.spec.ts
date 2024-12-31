import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsMobilisationAddComponent } from './funds-mobilisation-add.component';

describe('FundsMobilisationAddComponent', () => {
  let component: FundsMobilisationAddComponent;
  let fixture: ComponentFixture<FundsMobilisationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundsMobilisationAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundsMobilisationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
