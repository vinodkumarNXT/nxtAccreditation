import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionalObligationsViewComponent } from './constitutional-obligations-view.component';

describe('ConstitutionalObligationsViewComponent', () => {
  let component: ConstitutionalObligationsViewComponent;
  let fixture: ComponentFixture<ConstitutionalObligationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstitutionalObligationsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstitutionalObligationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
