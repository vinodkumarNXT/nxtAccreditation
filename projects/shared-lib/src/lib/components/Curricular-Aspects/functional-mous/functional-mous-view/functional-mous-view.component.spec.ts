import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalMousViewComponent } from './functional-mous-view.component';

describe('FunctionalMousViewComponent', () => {
  let component: FunctionalMousViewComponent;
  let fixture: ComponentFixture<FunctionalMousViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalMousViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalMousViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
