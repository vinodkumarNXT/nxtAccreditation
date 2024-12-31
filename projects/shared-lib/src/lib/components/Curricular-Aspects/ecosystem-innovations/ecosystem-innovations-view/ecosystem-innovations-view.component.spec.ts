import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemInnovationsViewComponent } from './ecosystem-innovations-view.component';

describe('EcosystemInnovationsViewComponent', () => {
  let component: EcosystemInnovationsViewComponent;
  let fixture: ComponentFixture<EcosystemInnovationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcosystemInnovationsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcosystemInnovationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
