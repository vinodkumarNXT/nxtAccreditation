import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastractureExpenditureViewComponent } from './infrastracture-expenditure-view.component';

describe('InfrastractureExpenditureViewComponent', () => {
  let component: InfrastractureExpenditureViewComponent;
  let fixture: ComponentFixture<InfrastractureExpenditureViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfrastractureExpenditureViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfrastractureExpenditureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
