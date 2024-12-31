import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionIntegratesAddComponent } from './institution-integrates-add.component';

describe('InstitutionIntegratesAddComponent', () => {
  let component: InstitutionIntegratesAddComponent;
  let fixture: ComponentFixture<InstitutionIntegratesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionIntegratesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionIntegratesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
