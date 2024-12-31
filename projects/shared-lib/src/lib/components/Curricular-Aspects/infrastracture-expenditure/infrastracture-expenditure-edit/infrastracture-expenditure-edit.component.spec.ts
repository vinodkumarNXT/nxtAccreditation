import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastractureExpenditureEditComponent } from './infrastracture-expenditure-edit.component';

describe('InfrastractureExpenditureEditComponent', () => {
  let component: InfrastractureExpenditureEditComponent;
  let fixture: ComponentFixture<InfrastractureExpenditureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastractureExpenditureEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfrastractureExpenditureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
