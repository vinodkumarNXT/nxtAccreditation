import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastractureExpenditureAddComponent } from './infrastracture-expenditure-add.component';

describe('InfrastractureExpenditureAddComponent', () => {
  let component: InfrastractureExpenditureAddComponent;
  let fixture: ComponentFixture<InfrastractureExpenditureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastractureExpenditureAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfrastractureExpenditureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
