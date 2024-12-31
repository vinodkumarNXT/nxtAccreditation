import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSchloarshipViewComponent } from './std-schloarship-view.component';

describe('StdSchloarshipViewComponent', () => {
  let component: StdSchloarshipViewComponent;
  let fixture: ComponentFixture<StdSchloarshipViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdSchloarshipViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdSchloarshipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
