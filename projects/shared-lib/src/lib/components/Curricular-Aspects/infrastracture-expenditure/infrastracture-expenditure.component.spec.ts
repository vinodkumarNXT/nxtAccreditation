import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastractureExpenditureComponent } from './infrastracture-expenditure.component';

describe('InfrastractureExpenditureComponent', () => {
  let component: InfrastractureExpenditureComponent;
  let fixture: ComponentFixture<InfrastractureExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastractureExpenditureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfrastractureExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
