import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemInnovationsEditComponent } from './ecosystem-innovations-edit.component';

describe('EcosystemInnovationsEditComponent', () => {
  let component: EcosystemInnovationsEditComponent;
  let fixture: ComponentFixture<EcosystemInnovationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemInnovationsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemInnovationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
