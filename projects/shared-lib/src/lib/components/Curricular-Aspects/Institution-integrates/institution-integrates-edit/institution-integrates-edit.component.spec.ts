import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionIntegratesEditComponent } from './institution-integrates-edit.component';

describe('InstitutionIntegratesEditComponent', () => {
  let component: InstitutionIntegratesEditComponent;
  let fixture: ComponentFixture<InstitutionIntegratesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionIntegratesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionIntegratesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
