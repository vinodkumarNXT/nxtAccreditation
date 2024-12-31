import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITFacilitiesAddComponent } from './it-facilities-add.component';

describe('ITFacilitiesAddComponent', () => {
  let component: ITFacilitiesAddComponent;
  let fixture: ComponentFixture<ITFacilitiesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITFacilitiesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ITFacilitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
