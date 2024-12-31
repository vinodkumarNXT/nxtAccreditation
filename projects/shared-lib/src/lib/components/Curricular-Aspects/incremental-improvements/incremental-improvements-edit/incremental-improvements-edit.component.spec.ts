import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalImprovementsEditComponent } from './incremental-improvements-edit.component';

describe('IncrementalImprovementsEditComponent', () => {
  let component: IncrementalImprovementsEditComponent;
  let fixture: ComponentFixture<IncrementalImprovementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalImprovementsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncrementalImprovementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
