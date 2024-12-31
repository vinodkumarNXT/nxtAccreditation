import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalBodiesViewComponent } from './institutional-bodies-view.component';

describe('InstitutionalBodiesViewComponent', () => {
  let component: InstitutionalBodiesViewComponent;
  let fixture: ComponentFixture<InstitutionalBodiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalBodiesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalBodiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
