import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegradableComponent } from './degradable.component';

describe('DegradableComponent', () => {
  let component: DegradableComponent;
  let fixture: ComponentFixture<DegradableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegradableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DegradableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
