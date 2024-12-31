import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalMousComponent } from './functional-mous.component';

describe('FunctionalMousComponent', () => {
  let component: FunctionalMousComponent;
  let fixture: ComponentFixture<FunctionalMousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalMousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalMousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
