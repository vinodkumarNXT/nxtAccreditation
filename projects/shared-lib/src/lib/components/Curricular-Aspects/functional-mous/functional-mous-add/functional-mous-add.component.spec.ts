import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalMousAddComponent } from './functional-mous-add.component';

describe('FunctionalMousAddComponent', () => {
  let component: FunctionalMousAddComponent;
  let fixture: ComponentFixture<FunctionalMousAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalMousAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionalMousAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
