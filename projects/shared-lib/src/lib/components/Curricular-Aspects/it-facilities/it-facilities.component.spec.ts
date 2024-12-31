import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITFacilitiesComponent } from './it-facilities.component';

describe('ITFacilitiesComponent', () => {
  let component: ITFacilitiesComponent;
  let fixture: ComponentFixture<ITFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITFacilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ITFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
