import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPracticesEditComponent } from './best-practices-edit.component';

describe('BestPracticesEditComponent', () => {
  let component: BestPracticesEditComponent;
  let fixture: ComponentFixture<BestPracticesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestPracticesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestPracticesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
