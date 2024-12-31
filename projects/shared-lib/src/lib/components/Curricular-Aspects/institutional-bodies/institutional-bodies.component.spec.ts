import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalBodiesComponent } from './institutional-bodies.component';

describe('InstitutionalBodiesComponent', () => {
  let component: InstitutionalBodiesComponent;
  let fixture: ComponentFixture<InstitutionalBodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalBodiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalBodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
