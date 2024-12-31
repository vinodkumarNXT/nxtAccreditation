import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITFacilitiesEditComponent } from './it-facilities-edit.component';

describe('ITFacilitiesEditComponent', () => {
  let component: ITFacilitiesEditComponent;
  let fixture: ComponentFixture<ITFacilitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITFacilitiesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ITFacilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
