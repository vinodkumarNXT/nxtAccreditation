import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionalObligationsEditComponent } from './constitutional-obligations-edit.component';

describe('ConstitutionalObligationsEditComponent', () => {
  let component: ConstitutionalObligationsEditComponent;
  let fixture: ComponentFixture<ConstitutionalObligationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstitutionalObligationsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstitutionalObligationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
