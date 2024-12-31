import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegradableViewComponent } from './degradable-view.component';

describe('DegradableViewComponent', () => {
  let component: DegradableViewComponent;
  let fixture: ComponentFixture<DegradableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegradableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegradableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
