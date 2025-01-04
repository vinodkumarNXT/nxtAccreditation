import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedIntakeEditComponent } from './sanctioned-intake-edit.component';

describe('SanctionedIntakeEditComponent', () => {
  let component: SanctionedIntakeEditComponent;
  let fixture: ComponentFixture<SanctionedIntakeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctionedIntakeEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanctionedIntakeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
