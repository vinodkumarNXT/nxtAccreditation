import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalBodiesEditComponent } from './institutional-bodies-edit.component';

describe('InstitutionalBodiesEditComponent', () => {
  let component: InstitutionalBodiesEditComponent;
  let fixture: ComponentFixture<InstitutionalBodiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalBodiesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalBodiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
