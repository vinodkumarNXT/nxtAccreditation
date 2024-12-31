import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITFacilitiesViewComponent } from './it-facilities-view.component';

describe('ITFacilitiesViewComponent', () => {
  let component: ITFacilitiesViewComponent;
  let fixture: ComponentFixture<ITFacilitiesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITFacilitiesViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ITFacilitiesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
