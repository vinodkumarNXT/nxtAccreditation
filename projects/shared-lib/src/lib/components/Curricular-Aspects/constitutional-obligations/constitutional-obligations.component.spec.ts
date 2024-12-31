import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionalObligationsComponent } from './constitutional-obligations.component';

describe('ConstitutionalObligationsComponent', () => {
  let component: ConstitutionalObligationsComponent;
  let fixture: ComponentFixture<ConstitutionalObligationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstitutionalObligationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstitutionalObligationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
