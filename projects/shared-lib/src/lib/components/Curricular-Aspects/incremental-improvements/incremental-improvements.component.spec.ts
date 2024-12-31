import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalImprovementsComponent } from './incremental-improvements.component';

describe('IncrementalImprovementsComponent', () => {
  let component: IncrementalImprovementsComponent;
  let fixture: ComponentFixture<IncrementalImprovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalImprovementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncrementalImprovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
