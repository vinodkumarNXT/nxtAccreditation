import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionedIntakeViewComponent } from './sanctioned-intake-view.component';

describe('SanctionedIntakeViewComponent', () => {
  let component: SanctionedIntakeViewComponent;
  let fixture: ComponentFixture<SanctionedIntakeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanctionedIntakeViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanctionedIntakeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
