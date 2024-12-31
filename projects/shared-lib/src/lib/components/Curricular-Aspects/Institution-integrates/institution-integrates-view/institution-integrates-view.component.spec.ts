import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionIntegratesViewComponent } from './institution-integrates-view.component';

describe('InstitutionIntegratesViewComponent', () => {
  let component: InstitutionIntegratesViewComponent;
  let fixture: ComponentFixture<InstitutionIntegratesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionIntegratesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionIntegratesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
