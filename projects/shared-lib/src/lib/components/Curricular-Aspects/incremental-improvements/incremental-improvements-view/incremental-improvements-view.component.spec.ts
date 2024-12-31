import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalImprovementsViewComponent } from './incremental-improvements-view.component';

describe('IncrementalImprovementsViewComponent', () => {
  let component: IncrementalImprovementsViewComponent;
  let fixture: ComponentFixture<IncrementalImprovementsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalImprovementsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncrementalImprovementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
