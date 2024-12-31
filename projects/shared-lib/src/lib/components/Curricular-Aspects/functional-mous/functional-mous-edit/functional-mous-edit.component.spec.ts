import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalMousEditComponent } from './functional-mous-edit.component';

describe('FunctionalMousEditComponent', () => {
  let component: FunctionalMousEditComponent;
  let fixture: ComponentFixture<FunctionalMousEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalMousEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalMousEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
