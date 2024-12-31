import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementalImprovementsAddComponent } from './incremental-improvements-add.component';

describe('IncrementalImprovementsAddComponent', () => {
  let component: IncrementalImprovementsAddComponent;
  let fixture: ComponentFixture<IncrementalImprovementsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementalImprovementsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncrementalImprovementsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
