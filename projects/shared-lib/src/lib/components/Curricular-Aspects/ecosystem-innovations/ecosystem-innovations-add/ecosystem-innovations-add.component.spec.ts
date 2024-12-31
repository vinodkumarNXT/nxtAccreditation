import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemInnovationsAddComponent } from './ecosystem-innovations-add.component';

describe('EcosystemInnovationsAddComponent', () => {
  let component: EcosystemInnovationsAddComponent;
  let fixture: ComponentFixture<EcosystemInnovationsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemInnovationsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemInnovationsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
