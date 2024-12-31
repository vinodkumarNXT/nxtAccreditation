import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionalObligationsAddComponent } from './constitutional-obligations-add.component';

describe('ConstitutionalObligationsAddComponent', () => {
  let component: ConstitutionalObligationsAddComponent;
  let fixture: ComponentFixture<ConstitutionalObligationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstitutionalObligationsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstitutionalObligationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
