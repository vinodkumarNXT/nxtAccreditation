import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityDevelopmentEditComponent } from './capacity-development-edit.component';

describe('CapacityDevelopmentEditComponent', () => {
  let component: CapacityDevelopmentEditComponent;
  let fixture: ComponentFixture<CapacityDevelopmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapacityDevelopmentEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapacityDevelopmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
