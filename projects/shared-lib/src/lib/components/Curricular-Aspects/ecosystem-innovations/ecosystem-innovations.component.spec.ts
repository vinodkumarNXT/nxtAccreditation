import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemInnovationsComponent } from './ecosystem-innovations.component';

describe('EcosystemInnovationsComponent', () => {
  let component: EcosystemInnovationsComponent;
  let fixture: ComponentFixture<EcosystemInnovationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemInnovationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemInnovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
